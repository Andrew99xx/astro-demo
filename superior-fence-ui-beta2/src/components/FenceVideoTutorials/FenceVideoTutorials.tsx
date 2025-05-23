import React from "react";
import ReactPlayer from "react-player";
import type { IFenceVideoDetailsResponse } from "../../graphql/generatedType/VideoDetailsTypes";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

export default function FenceVideoTutorials({
  data,
}: {
  data: IFenceVideoDetailsResponse;
}) {
  const mainData = data?.allFenceInstallationVideo?.edges[0]?.node;

  return (
    <div className="py-[100px]">
      <div className="container">
        <div
          className="videoTutotialDetails"
          dangerouslySetInnerHTML={{ __html: mainData.content }}
        />
        <h3 className="text-[32px] mb-[30px]">
          Want a quick overview, Watch this!
        </h3>
        <ReactPlayer
          className="w-full mainVideoPlayer"
          url={
            mainData?.fenceVideoTutorialPagePurpose?.fenceVideoTutorialVideoLink
          }
          width={500}
          height={500}
        />
        <div className="mt-[40px]">
          <h3 className="text-[32px] mb-[10px]">Need Help?</h3>

          <p>
            We can help! <a href="/contact-us">Send us your Questions</a>, or
            pick up the phone and give us a call!
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-end">
          <li className="inline-flex items-center justify-center mr-2">
            <FacebookShareButton
              url={
                "https://leanwdev.com//fence-video-tutorials/homeowners-association-fence-considerations"
              }
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </li>
          <li className="inline-flex items-center justify-center mr-2">
            <TwitterShareButton
              url={
                "https://leanwdev.com//fence-video-tutorials/homeowners-association-fence-considerations"
              }
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </li>

          <li className="inline-flex items-center justify-center">
            <LinkedinShareButton
              url={
                "https://leanwdev.com//fence-video-tutorials/homeowners-association-fence-considerations"
              }
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
