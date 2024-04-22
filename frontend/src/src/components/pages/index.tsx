import { Layout } from "@/components/Layout";
import { SearchForm } from "../ui/SearchForm";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export const MainPage = () => {
  return (
    <Layout>
      <section className="w-full py-24 px-2">
        <section>
          <div className="max-w-full mx-auto">
            <SearchForm />
          </div>
          <div className="max-w-full mx-auto mt-12">
            <Button onClick={() => alert("clicked!")}>お酒を登録する</Button>
          </div>
        </section>
        <section className="flex flex-wrap justify-between items-stretch gap-8 py-12">
          {dummy.map((item, key) => {
            return (
              <div className="sm:w-5/12 w-full mb-8" key={key}>
                <Card
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              </div>
            );
          })}
          <div className="w-full mt-12">
            <Button onClick={() => alert("clicked!")}>次の10件</Button>
          </div>
        </section>
      </section>
    </Layout>
  );
};

const dummy = [
  {
    title: "ぽんしゅ",
    description:
      "日本酒のおすすめ日本酒のおすすめ日本酒のおすすめ日本酒のおすすめ日本酒のおすすめ日本酒のおすすめ",
    imageUrl: "/dummyImage.png",
  },
  {
    title: "ぽんしゅ",
    description: "日本酒のおすすめ",
    imageUrl: "/dummyImage.png",
  },
  {
    title: "ぽんしゅ",
    description: "日本酒のおすすめ",
    imageUrl: "/dummyImage.png",
  },
  {
    title: "ぽんしゅ",
    description: "日本酒のおすすめ",
    imageUrl: "/dummyImage.png",
  },
  {
    title: "ぽんしゅ",
    description: "日本酒のおすすめ",
    imageUrl: "/dummyImage.png",
  },
  {
    title: "ぽんしゅ",
    description: "日本酒のおすすめ",
    imageUrl: "/dummyImage.png",
  },
];
