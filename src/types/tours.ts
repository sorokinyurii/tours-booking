interface TourProgram {
  stepNumber: number;
  stepName: string;
  stepDescription: string;
}

interface TourAttributes {
  difficulty: string;
  duration: string;
  age: string;
  groupSize: string;
  languages: string[];
}

interface MeetPoint {
  Lattitude: string;
  Longitude: string;
  AddressLine: string;
}

interface TourContacts {
  contactType: string;
    value: string;
}

interface PricePer {
  from: number;
  to: number;
  price: string;
}

interface TourPrice {
  pricingType: string;
  pricePerPerson?: PricePer[];
  pricePerGroup?: PricePer[];
  discountCount?: number;
}

interface TourCalendar {
  singleDay: string;
  scheduleType: string;
  scheduleList: {
    dates: { from: string; to?: string }[];
    time: string;
    duration: string;
  }[];
  publishWindowInDays: string;
  canBookBefore: string;
}

export type Tour = {
  tourUniqueId: string;
  tourName: string;
  tourTopic: string;
  tourAnnounce: string;
  tourStyle: string;
  tourType: string;
  tourProgram: TourProgram[];
  tourAttributes: TourAttributes;
  tourRoute: string;
  tourAdditionalInfo: string;
  meetPoint: MeetPoint;
  tourContacts: TourContacts[];
  images: {
    url: string;
    type: string;
  }[];
  price: TourPrice;
  tourCalendar: TourCalendar;
  paymentOptions: {
    paymentType: string;
  };
  guestRequiments: {
    minAge: number;
    maxAge: number;
    minKidAge?: number;
    additional?: string;
  };
  seo: {
    slug: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
};
