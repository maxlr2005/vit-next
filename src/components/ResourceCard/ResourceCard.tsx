import { Resource, VITResource } from "../../core/entities";
import { useMemo } from "react";
import styled from 'styled-components';
import Bookmark from "../../../public/assets/bookmark.svg";
import Share from "../../../public/assets/share.svg";
import { showDefaultNotification } from "../Notification/Notification";
import { BackgroundImage } from "./BackgroundImage";
import { useDetailedCard } from "../DetailedCard/DetailedCard";

export type ResourceCardProps = {
  hit: VITResource,
};

export const SAVED_LINK_KEY = "saved_posts";

export const ResourceCard = ({ hit } : ResourceCardProps) => {

  const { show: showDetailedCard, detailedCard } = useDetailedCard();

  const resourceData = useMemo(() => Resource.fromVITResource(hit), [hit]);

  const onSaveClicked = () => {
    const prevList = JSON.parse(localStorage.getItem(SAVED_LINK_KEY)!) || [];
    localStorage.setItem(SAVED_LINK_KEY, JSON.stringify([...prevList, hit]));

    showDefaultNotification("Link saved locally.");
  };

  const onShareClicked = () => {
    navigator.clipboard.writeText(hit.url || "");
    showDefaultNotification("Link copied to Clipboard.");
  };

  const onSelectCard = () => {
    showDetailedCard(hit);
  };
  
  // TODO: Remove if a third action is not needed
  // const onCopyLinkClicked = () => {};

  return (
    <>
      {detailedCard}
      <div className="relative py-4 px-4 text-white h-full" onClick={onSelectCard}>
        {/* colored overlay */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-slate-900/80 z-20" />

        {resourceData.imageSrc && (
          <div className="absolute top-0 right-0 bottom-0 left-0 z-10">
            <BackgroundImage alt={resourceData.imageAlt || "Link image"} src={resourceData.imageSrc} />
          </div>
        )}

        <div className="relative z-30 h-full grid grid-rows-[min-content_2fr_1fr_36px] gap-5">
          <div className="text-right"><span>{resourceData.timeAgo.toString()}</span></div>

          <p className={`py-0 max-h-[calc(2.5rem*4)]
            text-4xl text-multiline-overflow-mixin
            text-ellipsis [-webkit-line-clamp:4]`}>{resourceData.title}</p>

          <p className="self-center max-h-[calc(2rem*4)] text-2xl text-multiline-overflow-mixin text-ellipsis [-webkit-line-clamp:2]">{resourceData.description}</p>
          <ActionsStyled className="flex justify-around">
            {/* Remove <Link /> Icon If a third action is unneeded */}
            {/* <Link/> */}
            <span title="Save Button" onClick={onSaveClicked}><Bookmark /></span>
            <span title="Share Button" onClick={onShareClicked}><Share/></span>
          </ActionsStyled>
        </div>
      </div>
    </>
  );
};

const ActionsStyled = styled.div`
  svg path {
    stroke: #FFF;
  }
`;
