import { Layout } from "@/components/Layout";
import { SearchForm } from "../ui/SearchForm";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { useState } from "react";
import { RegisterSakeModal } from "../ui/RegisterSakeModal";
import useSWR from "swr";
import { fetcher } from "@/lib/feacher";
import { SakeList } from "@/types";
import { Loading } from "../ui/Loading";
import { apiUrl } from "@/constants";

export const MainPage = () => {
  const { data: sake, isLoading } = useSWR<{ data: SakeList }>(
    `${apiUrl}/sake`,
    fetcher
  );

  const [onModalOpen, setOnModalOpen] = useState(false);

  const handleModalOpen = () => {
    setOnModalOpen(true);
  };
  return (
    <Layout>
      <section className="py-24 px-2">
        <section>
          <div className="mx-auto">
            <SearchForm />
          </div>
          <div className="mx-auto mt-12">
            <Button onClick={() => handleModalOpen()}>お酒を登録する</Button>
          </div>
        </section>
        <section className="flex flex-wrap justify-between items-stretch gap-8 py-12">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {sake?.data.map((item, key) => {
                return (
                  <div className="sm:w-5/12 w-full mb-8" key={key}>
                    <Card
                      title={item.name}
                      description={"ほげほげふがふがぴよぴよ"}
                      imageUrl={item.imageUrl}
                    />
                  </div>
                );
              })}
              <div className="w-full mt-12">
                <Button onClick={() => alert("clicked!")}>次の10件</Button>
              </div>
            </>
          )}
        </section>
      </section>
      <RegisterSakeModal
        title="お酒の新規登録"
        buttonType="primary"
        buttonText="登録"
        isOpen={onModalOpen}
        closeModal={() => setOnModalOpen(false)}
      />
    </Layout>
  );
};
