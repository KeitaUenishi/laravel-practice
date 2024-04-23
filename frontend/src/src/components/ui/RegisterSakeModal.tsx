import React, { ChangeEvent, useEffect } from "react";
import { ModalBase, ModalProps } from "./ModalBase";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import Image from "next/image";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const [previewImage, setPreviewImage] = React.useState<string>("");
  const [isCategoryView, setIsCategoryView] = React.useState<boolean>(false);
  const [categoryValue, setCategoryValue] = React.useState<string>("");

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

  // TODO: inputの共通化
  return (
    <ModalBase {...props}>
      {isCategoryView ? (
        <>
          <form onSubmit={handleSubmit(categoryOnSubmit)}>
            <input
              type="text"
              className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="カテゴリ名"
              {...register("categoryName", {
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
              <input
                type="text"
                className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="パラメータ1"
                {...register("param.0.name", {
                  required: "パラメータ1を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[0]?.message : ""}
              </span>
              <input
                type="text"
                className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="パラメータ2"
                {...register("param.1.name", {
                  required: "パラメータ2を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[1]?.message : ""}
              </span>{" "}
              <input
                type="text"
                className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="パラメータ3"
                {...register("param.2.name", {
                  required: "パラメータ3を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[2]?.message : ""}
              </span>{" "}
              <input
                type="text"
                className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="パラメータ4"
                {...register("param.3.name", {
                  required: "パラメータ4を入力してください",
                })}
              />
              <span className="text-red-500">
                {errors ? errors.param?.[3]?.message : ""}
              </span>{" "}
              <input
                type="text"
                className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="パラメータ5"
                {...register("param.4.name", {
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
                onChange: (e: ChangeEvent<HTMLSelectElement>) =>
                  setCategoryValue(e.target.value),
              })}
            >
              <option key="default" value={""}>
                カテゴリを選択
              </option>
              {dummySelect.map((item, idx) => {
                return (
                  <option key={idx} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            <div className="mt-4">
              <Button
                buttonType={categoryValue === "" ? "primary" : "secondary"}
                onClick={() => setIsCategoryView(true)}
                disabled={categoryValue === "" ? false : true}
                type="button"
              >
                カテゴリ新規登録
              </Button>
            </div>
            {categoryValue !== "" && (
              <>
                <div className="mt-8 flex flex-col">
                  {dummyParam.map((item, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <label className="block mt-4 text-md text-gray-600">
                          {item.name}
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
                          {[...Array(5)].map((_, idx) => {
                            return (
                              <option key={idx} value={idx}>
                                {idx + 1}
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

const dummySelect = [
  { value: "1", label: "日本酒" },
  { value: "2", label: "焼酎" },
  { value: "3", label: "ワイン" },
  { value: "4", label: "ビール" },
  { value: "5", label: "ウイスキー" },
  { value: "6", label: "カクテル" },
  { value: "7", label: "その他" },
];

const dummyParam: CategoryParam<{ name: string; value?: CategoryValue }> = [
  { name: "うま味", value: undefined },
  { name: "酸味", value: undefined },
  { name: "甘味", value: undefined },
  { name: "苦味", value: undefined },
  { name: "香り", value: undefined },
];
