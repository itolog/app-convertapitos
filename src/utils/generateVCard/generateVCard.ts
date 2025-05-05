import { VCardData } from "./types";

const generateVCard = (data: VCardData, version: "3.0" | "4.0" = "3.0"): string => {
  const newline = "\n";
  let vCard = "BEGIN:VCARD" + newline;
  vCard += `VERSION:${version}` + newline;

  const fullName =
    data.formattedName ||
    `${data.prefix || ""} ${data.firstName || ""} ${data.additionalNames || ""} ${data.lastName || ""} ${data.suffix || ""}`.trim();

  vCard += `FN:${fullName}` + newline;
  vCard +=
    `N:${data.lastName || ""};${data.firstName || ""};${data.additionalNames || ""};${data.prefix || ""};${data.suffix || ""}` +
    newline;

  if (data.nickname) vCard += `NICKNAME:${data.nickname}` + newline;
  if (data.birthday) vCard += `BDAY:${data.birthday}` + newline;
  if (data.anniversary) vCard += `ANNIVERSARY:${data.anniversary}` + newline;
  if (data.gender) vCard += `GENDER:${data.gender}` + newline;

  if (data.phone) vCard += `TEL;TYPE=CELL:${data.phone}` + newline;
  if (data.homePhone) vCard += `TEL;TYPE=HOME:${data.homePhone}` + newline;
  if (data.workPhone) vCard += `TEL;TYPE=WORK:${data.workPhone}` + newline;

  if (data.email) vCard += `EMAIL;TYPE=INTERNET:${data.email}` + newline;

  if (data.company || data.department) {
    vCard += `ORG:${data.company || ""}${data.department ? ";" + data.department : ""}` + newline;
  }

  if (data.title) vCard += `TITLE:${data.title}` + newline;
  if (data.role) vCard += `ROLE:${data.role}` + newline;

  if (data.website) vCard += `URL:${data.website}` + newline;

  if (data.address) {
    const addr = data.address;
    vCard +=
      `ADR;TYPE=${addr.type?.toUpperCase() || "HOME"}:;;${addr.street || ""};${addr.city || ""};${addr.region || ""};${addr.postalCode || ""};${addr.country || ""}` +
      newline;
  }

  if (data.photoURL) vCard += `PHOTO;VALUE=URI:${data.photoURL}` + newline;
  if (data.logoURL) vCard += `LOGO;VALUE=URI:${data.logoURL}` + newline;

  if (data.note) vCard += `NOTE:${data.note}` + newline;
  if (data.timezone) vCard += `TZ:${data.timezone}` + newline;
  if (data.uid) vCard += `UID:${data.uid}` + newline;
  if (data.revision) vCard += `REV:${data.revision}` + newline;

  vCard += "END:VCARD";

  return vCard;
};

export default generateVCard;
