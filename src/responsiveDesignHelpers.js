/**
 * Calculate the breakpoint of the device based on its width.
 * @param {number} width - The width of the device.
 * @returns {string} - The breakpoint of the device ('xs', 'sm', 'md', 'lg', 'xl').
 */
function calculateBreakpoint(width) {
    if (width < 576) {
        return 'xs';
    } else if (width < 768) {
        return 'sm';
    } else if (width < 992) {
        return 'md';
    } else if (width < 1200) {
        return 'lg';
    } else {
        return 'xl';
    }
}

module.exports = {
    calculateBreakpoint
};
