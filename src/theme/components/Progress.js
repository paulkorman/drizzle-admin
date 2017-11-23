const styles = theme => ({
    root: {
        opacity: 1,
        transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,
        position: 'fixed',
        willChange: 'opacity',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progress: {
        color: '#fff',
    }
});

export default styles;