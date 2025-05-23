import type { ICommonHeaderBanner } from "./FenceTypeResponseTypes";
import type { ISeoTypes } from "./ResponseType";

// fence service sidebar
export interface FenceServiceNode {
  title: string;
  slug: string;
}

export interface FenceServiceEdge {
  node: FenceServiceNode;
}

export interface AllFenceServices {
  edges: FenceServiceEdge[];
}

export interface IFenceServicesSidebarQuery {
  allFenceServices: AllFenceServices;
}

export interface MediaNode {
  altText: string;
  mediaItemUrl: string;
}

export interface MediaEdge {
  node: MediaNode;
}

export interface CommercialServicesGalleryImages {
  edges: MediaEdge[];
}

export interface CommercialFenceEstimates {
  commercialFenceEstimatesLeftDescription: string;
  commercialFenceEstimatesLeftHeading: string;
  commercialFenceEstimatesRightButtonText: string;
  commercialFenceEstimatesRightDescription: string;
  commercialFenceEstimatesRightHeading: string;
}

export interface WhyChooseSuperiorFenceListing {
  whyChooseSuperiorFenceListingDescription: string;
  whyChooseSuperiorFenceListingTitle: string;
}

export interface FenceServicesCommercial {
  commercialServicesGalleryImages: CommercialServicesGalleryImages;
  whyChooseCopy: string;
  whyChooseHeading: string;
  whyChooseSuperiorFenceListing: WhyChooseSuperiorFenceListing[];
  commercialFenceEstimatesLeftDescription?: string;
  commercialFenceEstimatesLeftHeading?: string;
  commercialFenceEstimatesRightButtonText?: string;
  commercialFenceEstimatesRightDescription?: string;
  commercialFenceEstimatesRightHeading?: string;
  commercialServicesGalleryButtonText;
  commercialServicesGalleryDescription;
  commercialServicesGalleryHeading;
}

export interface OurProcessListing {
  ourProcessListingHeading: string;
  ourProcessListingDescription: string;
  ourProcessListingIcon: {
    node: MediaNode;
  };
}

export interface WhyChooseUsListing {
  whyChooseUsListingDescription: string;
  whyChooseUsListingTitle: string;
}

export interface FenceServicesMetalFabrication {
  metalHeading: string;
  metalDescription: string;
  metalFabricationGalleryButtonText: string;
  metalFabricationGalleryDescription: string;
  metalFabricationGalleryHeading: string;
  metalFabricationGalleryImages: CommercialServicesGalleryImages;
  ourProcessButtonText: string;
  ourProcessHeading: string;
  ourProcessListing: OurProcessListing[];
  powderCoatingDescription: string;
  powderCoatingHeading: string;
  whyChooseUsBlockButtonText: string;
  whyChooseUsBlockDescription: string;
  whyChooseUsBlockHeading: string;
  whyChooseUsHeading: string;
  whyChooseUsListing: WhyChooseUsListing[];
}

export interface FenceServiceNode {
  title: string;
  slug: string;
  template?: {
    templateName:
      | "Service Type Gallery Commercial"
      | "Service Type Gallery Metal"
      | "Service Type Video"
      | "Default";
  };
  commonHeaderBanner?: ICommonHeaderBanner;
  fenceServicesCommercial?: FenceServicesCommercial;
  content?: string;
  fenceServicesMetalFabrication?: FenceServicesMetalFabrication;
  seo: ISeoTypes;
}

export interface FenceServiceEdge {
  node: FenceServiceNode;
}

export interface AllFenceServices {
  edges: FenceServiceEdge[];
}

export interface FenceVideoTutorialPagePurpose {
  fenceVideoTutorialVideoLink: string;
  videoThumbImage: {
    node: {
      altText: string;
      mediaItemUrl: string;
    };
  };
}

export interface FenceInstallationVideoNode {
  title: string;
  slug: string;
  content: string;
  fenceVideoTutorialPagePurpose: FenceVideoTutorialPagePurpose;
}

export interface FenceInstallationVideoEdge {
  node: FenceInstallationVideoNode;
}

export interface AllFenceInstallationVideo {
  edges: FenceInstallationVideoEdge[];
}

export interface IFenceServicesQueryData {
  allFenceServices: AllFenceServices;
  allFenceInstallationVideo: AllFenceInstallationVideo;
}
