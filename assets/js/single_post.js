const btnAddComment = document.querySelector("#add-comment").addEventListener("click", () => {
    document.querySelector(".form-add-comment").classList.toggle("d-block");
  const areaText =  document.querySelector("#input-comment");
        areaText.addEventListener("focus", () => {
                areaText.value = "";
        })
})