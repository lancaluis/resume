export type Skill = {
  name: string;
  icon: string;
  style: string;
  description: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type PlaceTemplate = {
  place: {
    slug: string;
    title: string;
    subtitle: string;
    content: {
      html: string;
    };
    gallery: [{ url: string; width: number; height: number }];
  };
};

export type Place = {
  id: number;
  title: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type Places = {
  places: Place[];
};
