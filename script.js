/**
 * Project Card Interaction Handler
 * This script ensures that cards toggle their "active" state correctly.
 * 1. It ignores clicks on the primary "Check it Out" button.
 * 2. It closes other open cards when a new one is clicked (accordion effect).
 */

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function (e) {
        // Prevent toggling if the user clicks the primary button or secondary links
        if (e.target.tagName === "A") {
            return;
        }

        // Optional: Close other cards when one is opened (Accordion effect)
        // Remove this block if you want multiple cards to stay open at once
        document.querySelectorAll(".card").forEach(otherCard => {
            if (otherCard !== this) {
                otherCard.classList.remove("active");
            }
        });

        // Toggle the active state for the clicked card
        this.classList.toggle("active");
    });
});
