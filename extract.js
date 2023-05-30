function extract() {
  // Extract job descriptions from upwork search page

  let descriptions = document.querySelectorAll(
    "span[data-test='job-description-text']"
  );
  let str = Array.from(descriptions).map((rslt) => rslt.textContent);

  return str.join("; ");
}
