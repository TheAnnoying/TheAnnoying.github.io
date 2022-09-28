globalThis.E = (e, t) => $(document.createElement(e, t))

function showPopup() {
    const popup = E("div").addClass("popup-container").append(
        E("div").addClass("popup").append(
            E("div").addClass("popup-banner").append(
                E("div").addClass("popup-close").text("󰅖").on("click", () => popup.remove())
            ),
            E("div").addClass("popup-content").html(`
                <h1>TheAnnoying#6068</h1>
            `)
        )
    ).appendTo(document.body).on("click", e => {
        if(e.target.classList[0] === "popup-container") {
            popup.remove();
        }
    });
}