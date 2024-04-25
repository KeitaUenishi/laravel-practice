import React, { ChangeEvent } from "react";
import { ModalBase, ModalProps } from "./ModalBase";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import useSWR from "swr";
import { Category } from "@/types";
import { apiUrl } from "@/constants";
import { fetcher } from "@/lib/feacher";
import { TextInput } from "./TextInput";

type CategoryParam<T> = [T, T, T, T, T];
type CategoryValue = 1 | 2 | 3 | 4 | 5 | undefined;
type Input = {
  sakeName: string;
  photo: string;
  category: string;
  categoryName?: string;
  param: CategoryParam<{ name: string; value?: CategoryValue }>;
};
export const RegisterSakeModal = (props: ModalProps) => {
  const { data: category } = useSWR<{ data: Category[] }>(
    `${apiUrl}/category`,
    fetcher
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const [previewImage, setPreviewImage] = React.useState<string>("");
  const [isCategoryView, setIsCategoryView] = React.useState<boolean>(false);
  const [categoryValue, setCategoryValue] = React.useState<
    Category | undefined
  >(undefined);

  const onSubmit = (data: any) => {
    console.log(`hi!, ${JSON.stringify(data)}`);
  };

  const categoryOnSubmit = (data: any) => {
    console.log(`category!, ${JSON.stringify(data)}`);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "" || !category) {
      return setCategoryValue(undefined);
    }
    const selectCategory = category.data.find(
      ({ id }) => id.toString() === e.target.value
    );

    if (selectCategory) {
      setCategoryValue(selectCategory);
    }
  };

  return (
    <ModalBase {...props}>
      {isCategoryView ? (
        <>
          <form onSubmit={handleSubmit(categoryOnSubmit)}>
            <TextInput
              placeholder="カテゴリ名"
              obj={register("categoryName", {
                required: "カテゴリ名を入力してください",
              })}
            />
            <span className="text-red-500">
              {errors ? errors.category?.message : ""}
            </span>
            <div className="mt-8 flex flex-col gap-2">
              <label className="block text-sm text-gray-600">
                カテゴリに紐づくパラメータを設定
              </label>
              <TextInput
                placeholder="パラメータ1"
                obj={register("param.0.name", {
                  required: "パラメータ1を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[0]?.message : ""}
              </span>
              <TextInput
                placeholder="パラメータ2"
                obj={register("param.1.name", {
                  required: "パラメータ2を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[1]?.message : ""}
              </span>{" "}
              <TextInput
                placeholder="パラメータ3"
                obj={register("param.2.name", {
                  required: "パラメータ3を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[2]?.message : ""}
              </span>{" "}
              <TextInput
                placeholder="パラメータ4"
                obj={register("param.3.name", {
                  required: "パラメータ4を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[3]?.message : ""}
              </span>{" "}
              <TextInput
                placeholder="パラメータ5"
                obj={register("param.4.name", {
                  required: "パラメータ5を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[4]?.message : ""}
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <Button
                buttonType="secondary"
                onClick={() => setIsCategoryView(false)}
              >
                戻る
              </Button>
              <Button buttonType="primary">新規登録</Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="お酒の名前"
              {...register("sakeName", {
                required: "お酒の名前を入力してください",
              })}
            />
            <span className="text-red-500">
              {errors ? errors.sakeName?.message : ""}
            </span>
            {previewImage && (
              <Image
                src={previewImage}
                alt="preview"
                className="my-4 w-full h-auto rounded-lg"
                // TODO: なぜこれでレスポンシブになってる…？
                width={400}
                height={400}
              />
            )}
            <label
              htmlFor="photo"
              className="inline-block w-full text-center bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer mt-4"
            >
              画像アップロード
              <input
                hidden
                type="file"
                id="photo"
                accept="image/*,.png,.jpg,.jpeg"
                {...register("photo", {
                  required: "画像を選択してください",
                  onChange: handleFileChange,
                })}
              />
            </label>
            <span className="text-red-500">
              {errors ? errors.photo?.message : ""}
            </span>
            <select
              className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-4"
              {...register("category", {
                onChange: (e) => handleCategoryChange(e),
              })}
            >
              <option key="default" value={""}>
                カテゴリを選択
              </option>
              {category?.data.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <div className="mt-4">
              <Button
                buttonType={categoryValue ? "secondary" : "primary"}
                onClick={() => setIsCategoryView(true)}
                disabled={categoryValue ? true : false}
                type="button"
              >
                カテゴリ新規登録
              </Button>
            </div>
            {categoryValue && category && (
              <>
                <div className="mt-8 flex flex-col">
                  {Object.entries(categoryValue ?? {})
                    .filter(([x]) => x.startsWith("param"))
                    .map(([_, name], idx) => {
                      return (
                        <React.Fragment key={idx}>
                          <label className="block mt-4 text-md text-gray-600">
                            {name}
                          </label>
                          <select
                            className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            {...register(
                              `param.${idx}.value` as
                                | "param.0.value"
                                | "param.1.value"
                                | "param.2.value"
                                | "param.3.value"
                                | "param.4.value"
                            )}
                          >
                            <option key="default" value={""}>
                              未選択
                            </option>
                            {[...Array(5)].map((_, optionIdx) => {
                              return (
                                <option key={optionIdx} value={optionIdx}>
                                  {optionIdx + 1}
                                </option>
                              );
                            })}
                          </select>
                        </React.Fragment>
                      );
                    })}
                </div>
                <div className="mt-8 flex justify-end gap-x-2 pt-4">
                  <Button buttonType="primary">新規登録</Button>
                </div>
              </>
            )}
          </form>
        </>
      )}
    </ModalBase>
  );
};
