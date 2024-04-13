import React from "react";
const UpdatedListContext = React.createContext({
  updatedNoteList: () => [],
});

console.log(UpdatedListContext.updatedNoteList);

export default UpdatedListContext;
