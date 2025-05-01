document.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', function () {
        if (this.checked) {
            document.querySelectorAll('input[type="checkbox"]').forEach(other => {
                if (other !== this) {
                    other.checked = false;
                }
            });
        }
    });
});
