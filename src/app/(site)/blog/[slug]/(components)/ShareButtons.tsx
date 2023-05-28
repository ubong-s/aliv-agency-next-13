"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

interface ShareButtonsProps {
  url: string;
  title: string;
  media: string;
}

export const ShareButtons = ({ url, title, media }: ShareButtonsProps) => {
  return (
    <div className="share__buttons flex items-center gap-4 mb-8 lg:flex-col ">
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton url={url} title={title} media={media}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};
