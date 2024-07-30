import Image from "next/image";
import Link from "next/link";

const mockImages = [
  "https://utfs.io/f/85b4eb70-92c5-4aa0-a992-1bf13546df6f-1xcy8.jpg",
  "https://utfs.io/f/b8193427-9815-4bc3-bf78-9b6185226946-1xcy6.jpg",
  "https://utfs.io/f/ffb1ebf6-a90a-46e3-9ddd-99aa87fe90ed-1xcy7.jpg",
  "https://utfs.io/f/beefc2b8-64fe-4b57-bfcf-0412844b0757-xw7f1y.png",
  "https://utfs.io/f/f8c78b6e-4744-4eb3-9d5f-99ad6818a876-peb6v0.jpg",
].map((url, index) => ({ id: index + 1, url })); //=

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      {[...mockImages, ...mockImages, ...mockImages].map(({ id, url }) => (
        <div key={id} className="w-52">
          <img src={url} alt="" />
        </div>
      ))}
    </main>
  );
}
