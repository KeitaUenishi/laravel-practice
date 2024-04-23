import Image from "next/image";

export const Card = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="w-full sm:h-[430px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-full h-1/2" style={{ paddingTop: "56.25%" }}>
        <Image
          className="rounded-t-lg absolute top-0 left-0 w-full h-full"
          src={imageUrl}
          alt="登録したお酒の画像"
          fill
          sizes="100%"
          priority={true}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
