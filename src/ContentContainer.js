import React from "react"

export function ContentContainer ({children}) {
    return <div style={{maxWidth: 1025, marginLeft: "auto", marginRight: "auto"}} >
        {children}
    </div>
}

