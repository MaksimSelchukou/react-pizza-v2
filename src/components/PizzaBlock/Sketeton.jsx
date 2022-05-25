import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={420}
        viewBox="0 0 900 950"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="284" cy="270" r="246" />
        <rect x="17" y="644" rx="10" ry="10" width="556" height="172" />
        <rect x="15" y="555" rx="0" ry="0" width="556" height="47" />
        <rect x="20" y="842" rx="13" ry="13" width="179" height="50" />
        <rect x="251" y="843" rx="11" ry="11" width="321" height="50" />
        <rect x="385" y="918" rx="0" ry="0" width="0" height="1" />
    </ContentLoader>
)

