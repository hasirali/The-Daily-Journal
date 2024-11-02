import React from "react";
import { formatDate } from "../../lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    description,
    title,
    category,
    _id,
    image,
  } = post;

  const authorId = author?.id;
  const authorName = author?.name;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          {authorId && (
            <Link href={`/user/${authorId}`}>
              <p className="text-16-medium line-clamp-1">{authorName}</p>
            </Link>
          )}
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        {authorId && (
          <Link href={`/user/${authorId}`}>
            <Image
              src="https://placehold.co/600x400"
              alt="placeholder logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        )}
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        {image && (
          <img src={image} alt="placeholder" className="startup-card_img" />
        )}
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase() || "uncategorized"}`}>
          <p className="text-16-medium">{category || "Uncategorized"}</p>
        </Link>
        <button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>
            <span>View Startup</span>
          </Link>
        </button>
      </div>
    </li>
  );
};

export default StartupCard;
