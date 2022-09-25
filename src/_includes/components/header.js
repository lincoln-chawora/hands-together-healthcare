document.addEventListener('alpine:init', () => {
    Alpine.data('navigation', () => ({
        isOpen: false,

        toggle() {
            this.isOpen = ! this.isOpen
        }
    }))
})