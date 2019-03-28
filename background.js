'use strict';

const openLabelledId = "copy-selection-reversed";

browser.menus.create({
  id: openLabelledId,
  title: "Copy Selection Reversed",
  contexts: ["selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === openLabelledId) {
    navigator.clipboard.writeText(
      info.selectionText.split("").reverse().join(""));
  }
});
