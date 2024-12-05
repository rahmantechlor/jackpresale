;(($) => {
    $(document).ready(() => {

        if (!Error.captureStackTrace) {
            Error.captureStackTrace = () => {}
        }

        Tokenico.list = Boolean(Tokenico.list)
        Tokenico.debug = Boolean(Tokenico.debug)
        Tokenico.userId = Number(Tokenico.userId)
        Tokenico.single = Boolean(Tokenico.single)
        Tokenico.creator = Boolean(Tokenico.creator)

        const config = JSON.parse(JSON.stringify(Tokenico))

        if (config.creator) {
            TokenicoCreator(config)
        }

        if (config.list) {
            TokenicoList(config)
        }

        if (config.single) {
            TokenicoSingle(config, config.singleProps)
        }
    })
})(jQuery)
