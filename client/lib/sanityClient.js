import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "sdag7usg",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skiLuhIiHpqJcaFVLcxm4Ha6uTmW7ig1F4TSNYVnG8hQtuXs1PsBYnieOZWZ038Zc3sNbKTwDEckMcVqCyEUV8TVcSxQNmzIDBsOznNCRYkpWlX74LKSZXKqi8F3DX3xuma3fPMs2bDcm70tZKo2Q55zzhPacIX2M6qGqGYDJmoCOknxd9SA",
  useCdn: false,
});
