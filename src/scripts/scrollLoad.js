
const image = document.getElementById('heroImage')
const infoSection = document.querySelector('.info')

if (image && infoSection) {
    const section = infoSection

    function updateImage() {
        const rect = section.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))

        let scale

        if (progress <= 0.5) {
            scale = 0.9 + progress * 0.6
        } else {
            scale = 1.2 - (progress - 0.5)
        }

        const fadeStart = 0.65
        const opacity = progress < fadeStart
            ? Math.min(1, progress / 0.2)
            : Math.max(0, 1 - (progress - fadeStart) / (1 - fadeStart))

        const translateY = progress * window.innerHeight * 0.35

        image.style.transform = `translateY(${translateY}px) scale(${scale})`
        image.style.opacity = opacity.toString()
        image.style.visibility = opacity > 0 ? 'visible' : 'hidden'
    }

    updateImage()
    window.addEventListener('scroll', updateImage)
    window.addEventListener('resize', updateImage)
}


