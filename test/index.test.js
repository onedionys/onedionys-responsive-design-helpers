const assert = require('assert');
const { calculateBreakpoint } = require('../src/responsiveDesignHelpers');

describe('Responsive Design Helpers', function() {
    describe('#calculateBreakpoint()', function() {
        it('should return "xs" for width less than 576', function() {
            assert.strictEqual(calculateBreakpoint(575), 'xs');
        });

        it('should return "sm" for width between 576 and 767', function() {
            assert.strictEqual(calculateBreakpoint(600), 'sm');
        });

        it('should return "md" for width between 768 and 991', function() {
            assert.strictEqual(calculateBreakpoint(800), 'md');
        });

        it('should return "lg" for width between 992 and 1199', function() {
            assert.strictEqual(calculateBreakpoint(1100), 'lg');
        });

        it('should return "xl" for width equal to or greater than 1200', function() {
            assert.strictEqual(calculateBreakpoint(1200), 'xl');
        });
    });
});
