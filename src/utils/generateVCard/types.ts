export interface VCardData {
  firstName?: string;
  lastName?: string;
  additionalNames?: string;
  prefix?: string;
  suffix?: string;
  formattedName?: string;

  nickname?: string;
  birthday?: string; // YYYY-MM-DD
  anniversary?: string;
  gender?: string; // M/F/Other

  email?: string;
  phone?: string;
  workPhone?: string;
  homePhone?: string;

  company?: string;
  department?: string;
  title?: string;
  role?: string;

  website?: string;
  address?: {
    type?: "home" | "work";
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };

  photoURL?: string;
  logoURL?: string;
  note?: string;
  timezone?: string;
  uid?: string;
  lang?: string;
  revision?: string; // timestamp
}
