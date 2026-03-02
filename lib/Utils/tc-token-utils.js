"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const buildTcTokenFromJid = async ({
    authState,
    jid,
    baseContent = []
}) => {
    try {
        const tcTokenData = await authState.keys.get('tctoken', [jid])

        const tcTokenBuffer = tcTokenData?.[jid]?.token

        if (!tcTokenBuffer) {
            return baseContent.length > 0 ? baseContent : undefined
        }

        baseContent.push({
            tag: 'tctoken',
            attrs: {},
            content: tcTokenBuffer
        })

        return baseContent
    } catch (error) {
        return baseContent.length > 0 ? baseContent : undefined
    }
}

module.exports = {
    buildTcTokenFromJid
}
