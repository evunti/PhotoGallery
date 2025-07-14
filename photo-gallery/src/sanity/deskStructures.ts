import S from "@sanity/desk-tool/structure-builder";

const deskStructure = () => {
  return S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("author").title("Authors"),
    ]);
};

export default deskStructure;
