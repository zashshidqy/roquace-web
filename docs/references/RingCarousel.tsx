"use client"

/**
 * RingCarousel — 3D ring/carousel component untuk React & Next.js.
 * Versi standalone dari komponen Framer, tanpa dependency platform
 * (addPropertyControls, ControlType, Link, RenderTarget dihilangkan;
 * semua diganti jadi props biasa + <a>/<Link> Next.js opsional).
 *
 * Dependency yang dibutuhkan:
 *   npm install framer-motion
 */

import * as React from "react"
import {
    animate,
    AnimatePresence,
    motion,
    useAnimationFrame,
    useInView,
    useMotionValue,
    useSpring,
    useTransform,
    type MotionValue,
} from "framer-motion"

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RingCarouselItem {
    type?: "image" | "video"
    image?: string
    video?: string
    poster?: string
    alt?: string
    title?: string
    href?: string
}

export interface RingCarouselProps {
    items: RingCarouselItem[]
    className?: string
    background?: string

    // Geometry
    radius?: number
    ellipseHeight?: number
    perspective?: number
    itemWidth?: number
    itemAspect?: number
    visibleArc?: number

    // Item appearance
    frontScale?: number
    sideScale?: number
    minOpacity?: number
    sideBlur?: number
    itemRadius?: string

    // Center preview
    showCenterPreview?: boolean
    previewWidth?: number
    previewAspect?: number
    previewRadius?: string
    previewShadow?: boolean
    fadeDuration?: number

    // Interaction
    dragSensitivity?: number
    dragFriction?: number
    snap?: boolean
    autoRotate?: boolean
    autoRotateSpeed?: number

    // Mouse tilt / parallax
    mouseTilt?: boolean
    tiltX?: number
    tiltY?: number
    tiltShift?: number
    tiltShiftY?: number

    // Title bar
    showTitleBar?: boolean
    titleBarBackground?: string
    titleColor?: string
    caseButtonLabel?: string

    // Render prop opsional untuk link (mis. pakai next/link)
    renderLink?: (href: string, children: React.ReactNode) => React.ReactNode
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value))
}

function normalizeAngle(angle: number) {
    let n = ((((angle + 180) % 360) + 360) % 360) - 180
    if (n === -180) n = 180
    return n
}

// ---------------------------------------------------------------------------
// Single ring item
// ---------------------------------------------------------------------------

interface RingItemProps {
    item: RingCarouselItem
    index: number
    itemCount: number
    itemWidth: number
    itemHeight: number
    radius: number
    ellipseHeight: number
    perspective: number
    rotation: MotionValue<number>
    sideScale: number
    frontScale: number
    minOpacity: number
    sideBlur: number
    itemRadius: string
    visibleArc: number
    springTiltX: MotionValue<number>
    springTiltY: MotionValue<number>
    mouseTilt: boolean
    tiltX: number
    tiltY: number
    tiltShift: number
    tiltShiftY: number
}

function RingItem(props: RingItemProps) {
    const {
        item,
        index,
        itemCount,
        itemWidth,
        itemHeight,
        radius,
        ellipseHeight,
        perspective,
        rotation,
        sideScale,
        frontScale,
        minOpacity,
        sideBlur,
        itemRadius,
        visibleArc,
        springTiltX,
        springTiltY,
        mouseTilt,
        tiltX,
        tiltY,
        tiltShift,
        tiltShiftY,
    } = props

    const baseAngle = (360 / itemCount) * index
    const angleFromFront = useTransform(rotation, (r) =>
        normalizeAngle(baseAngle + r)
    )
    const distanceFromFront = useTransform(angleFromFront, (a) => Math.abs(a))
    const theta = useTransform(angleFromFront, (a) => (a * Math.PI) / 180)
    const zDepth = useTransform(theta, (t) => Math.cos(t))
    const xOffset = useTransform(theta, (t) => Math.sin(t) * radius)
    const yOffset = useTransform(
        zDepth,
        (z) => -((1 - z) / 2) * clamp(ellipseHeight, 0, 300)
    )

    const scale = useTransform(zDepth, (z) => {
        const pf = Math.max(1.1, perspective / 220)
        const frontRaw = pf / (pf - 1)
        const backRaw = pf / (pf + 1)
        const raw = pf / (pf - z)
        const norm = clamp((raw - backRaw) / Math.max(0.0001, frontRaw - backRaw), 0, 1)
        return sideScale + (frontScale - sideScale) * norm
    })

    const depthOpacity = useTransform(zDepth, (z) => {
        const norm = clamp((z + 1) / 2, 0, 1)
        return minOpacity + (1 - minOpacity) * norm
    })
    const arcOpacity = useTransform(distanceFromFront, (d) => {
        const fadeRange = 30
        const safeArc = clamp(visibleArc, 60, 180)
        const fadeStart = Math.max(0, safeArc - fadeRange)
        if (d <= fadeStart) return 1
        if (d >= safeArc) return 0
        return 1 - (d - fadeStart) / Math.max(0.0001, safeArc - fadeStart)
    })
    const finalOpacity = useTransform(
        [depthOpacity, arcOpacity],
        (v) => (v as number[])[0] * (v as number[])[1]
    )
    const blur = useTransform(
        zDepth,
        (z) => sideBlur * (1 - clamp((z + 1) / 2, 0, 1))
    )
    const blurFilter = useTransform(blur, (b) => `blur(${b.toFixed(2)}px)`)
    const zIndex = useTransform(zDepth, (z) => Math.round((z + 1) * 1000))

    const rotateY = useTransform(theta, (t) => Math.sin(t) * 55)

    const parallaxFactor = useTransform(
        zDepth,
        (z) => 0.35 + 0.65 * clamp((z + 1) / 2, 0, 1)
    )
    const parallaxX = useTransform(
        [springTiltX, parallaxFactor],
        (v) => {
            const [tx, pf] = v as number[]
            return mouseTilt ? tx * clamp(tiltShift, 0, 120) * pf : 0
        }
    )
    const parallaxY = useTransform(
        [springTiltY, parallaxFactor],
        (v) => {
            const [ty, pf] = v as number[]
            return mouseTilt ? ty * clamp(tiltShiftY, 0, 120) * pf : 0
        }
    )
    const composedX = useTransform([xOffset, parallaxX], (v) => (v as number[])[0] + (v as number[])[1])
    const composedY = useTransform([yOffset, parallaxY], (v) => (v as number[])[0] + (v as number[])[1])
    const composedRotateY = useTransform(
        [rotateY, springTiltX],
        (v) => {
            const [base, tx] = v as number[]
            return mouseTilt ? clamp(base + tx * clamp(tiltY, 0, 40), -65, 65) : base
        }
    )
    const composedRotateX = useTransform(springTiltY, (ty) =>
        mouseTilt ? ty * -clamp(tiltX, 0, 40) : 0
    )

    const src = item.image || item.poster
    const alt = item.alt || item.title || `Item ${index + 1}`

    return (
        <motion.div
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: itemWidth,
                height: itemHeight,
                transform: "translate(-50%, -50%)",
                zIndex,
                pointerEvents: "none",
            }}
        >
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                    x: composedX,
                    y: composedY,
                    rotateX: composedRotateX,
                    rotateY: composedRotateY,
                }}
            >
                <motion.img
                    src={src}
                    alt={alt}
                    draggable={false}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: itemRadius,
                        opacity: finalOpacity,
                        filter: blurFilter,
                        scale,
                        userSelect: "none",
                    }}
                />
            </motion.div>
        </motion.div>
    )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function RingCarousel({
    items,
    className,
    background = "transparent",
    radius = 480,
    ellipseHeight = 110,
    perspective = 700,
    itemWidth: rawItemWidth = 126,
    itemAspect = 0.72,
    visibleArc = 180,
    frontScale = 1,
    sideScale = 0.3,
    minOpacity = 0.85,
    sideBlur = 0,
    itemRadius = "8px",
    showCenterPreview = true,
    previewWidth = 400,
    previewAspect = 0.86,
    previewRadius = "12px",
    previewShadow = true,
    fadeDuration = 0.25,
    dragSensitivity = 0.44,
    dragFriction = 0.8,
    snap = false,
    autoRotate = false,
    autoRotateSpeed = 9,
    mouseTilt = true,
    tiltX = 26,
    tiltY = 12,
    tiltShift = 40,
    tiltShiftY = 90,
    showTitleBar = true,
    titleBarBackground = "#000000",
    titleColor = "#FFFFFF",
    caseButtonLabel = "View Case",
    renderLink,
}: RingCarouselProps) {
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    const isInView = useInView(containerRef, { amount: 0.2 })

    const itemHeight = rawItemWidth / Math.max(itemAspect, 0.1)
    const previewHeight = previewWidth / Math.max(previewAspect, 0.1)

    const rotation = useMotionValue(0)
    const pointerX = useMotionValue(0)
    const pointerY = useMotionValue(0)
    const springTiltX = useSpring(pointerX, { stiffness: 200, damping: 30 })
    const springTiltY = useSpring(pointerY, { stiffness: 200, damping: 30 })

    const rotationStep = items.length > 0 ? 360 / items.length : 360
    const inertiaStop = React.useRef<(() => void) | null>(null)
    const [isDragging, setIsDragging] = React.useState(false)
    const dragState = React.useRef({
        active: false,
        pointerId: -1,
        lastX: 0,
        lastTime: 0,
        samples: [] as { t: number; v: number }[],
    })

    const stopInertia = React.useCallback(() => {
        inertiaStop.current?.()
        inertiaStop.current = null
    }, [])

    const snapToNearest = React.useCallback(
        (velocity = 0) => {
            if (!snap || items.length <= 1) return
            stopInertia()
            const target = Math.round(rotation.get() / rotationStep) * rotationStep
            inertiaStop.current = animate(rotation, target, {
                type: "spring",
                stiffness: 220,
                damping: 30,
                velocity,
            }).stop
        },
        [items.length, rotation, rotationStep, snap, stopInertia]
    )

    const startInertia = React.useCallback(
        (velocity: number) => {
            stopInertia()
            const friction = clamp(dragFriction, 0.1, 1)
            if (snap && Math.abs(velocity) < 18) {
                snapToNearest(velocity)
                return
            }
            inertiaStop.current = animate(rotation, rotation.get(), {
                type: "inertia",
                velocity,
                power: 0.2 + friction * 0.8,
                timeConstant: 160 + friction * 700,
                modifyTarget: (t) =>
                    snap && items.length > 1
                        ? Math.round(t / rotationStep) * rotationStep
                        : t,
            }).stop
        },
        [dragFriction, items.length, rotation, rotationStep, snap, snapToNearest, stopInertia]
    )

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        stopInertia()
        dragState.current = {
            active: true,
            pointerId: e.pointerId,
            lastX: e.clientX,
            lastTime: performance.now(),
            samples: [],
        }
        setIsDragging(true)
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    }

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (mouseTilt) {
            const rect = e.currentTarget.getBoundingClientRect()
            pointerX.set(clamp(((e.clientX - rect.left) / rect.width) * 2 - 1, -1, 1))
            pointerY.set(clamp(((e.clientY - rect.top) / rect.height) * 2 - 1, -1, 1))
        }
        const s = dragState.current
        if (!s.active || s.pointerId !== e.pointerId) return
        const now = performance.now()
        const dx = e.clientX - s.lastX
        const dt = Math.max(1, now - s.lastTime)
        const delta = dx * dragSensitivity
        rotation.set(rotation.get() + delta)
        const v = (delta / dt) * 1000
        s.samples = [...s.samples, { t: now, v }].filter((x) => now - x.t <= 120)
        s.lastX = e.clientX
        s.lastTime = now
    }

    const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
        const s = dragState.current
        if (!s.active || s.pointerId !== e.pointerId) return
        s.active = false
        setIsDragging(false)
        const now = performance.now()
        const recent = s.samples.filter((x) => now - x.t <= 120)
        const avg = recent.length
            ? recent.reduce((a, b) => a + b.v, 0) / recent.length
            : 0
        startInertia(avg)
    }

    useAnimationFrame((_, deltaMs) => {
        if (!autoRotate || isDragging || !isInView) return
        rotation.set(rotation.get() + autoRotateSpeed * (deltaMs / 1000))
    })

    React.useEffect(() => () => stopInertia(), [stopInertia])

    // Active (center) item tracking
    const [activeIndex, setActiveIndex] = React.useState(0)
    const activeIndexRef = React.useRef(0)
    React.useEffect(() => {
        if (items.length === 0) return
        const step = 360 / items.length
        const update = (r: number) => {
            let nearest = 0
            let nearestDist = Infinity
            for (let i = 0; i < items.length; i++) {
                const d = Math.abs(normalizeAngle(i * step + r))
                if (d < nearestDist) {
                    nearestDist = d
                    nearest = i
                }
            }
            if (nearest !== activeIndexRef.current) {
                activeIndexRef.current = nearest
                setActiveIndex(nearest)
            }
        }
        update(rotation.get())
        return rotation.on("change", update)
    }, [items.length, rotation])

    const centerItem = items[activeIndex]

    const titleBarContent = showTitleBar && centerItem && (
        <div
            style={{
                background: titleBarBackground,
                color: titleColor,
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                borderRadius: "8px 8px 0 0",
                fontSize: 15,
                fontWeight: 500,
            }}
        >
            <span
                style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}
            >
                {centerItem.title}
            </span>
            {centerItem.href &&
                (renderLink ? (
                    renderLink(
                        centerItem.href,
                        <span
                            style={{
                                background: "#fff",
                                color: "#000",
                                padding: "6px 10px",
                                borderRadius: 6,
                                fontSize: 13,
                                fontWeight: 600,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {caseButtonLabel}
                        </span>
                    )
                ) : (
                    <a
                        href={centerItem.href}
                        style={{
                            background: "#fff",
                            color: "#000",
                            padding: "6px 10px",
                            borderRadius: 6,
                            fontSize: 13,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            textDecoration: "none",
                        }}
                    >
                        {caseButtonLabel}
                    </a>
                ))}
        </div>
    )

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background,
                userSelect: "none",
                cursor: isDragging ? "grabbing" : "grab",
                touchAction: "none",
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            role="region"
            aria-label="3D ring carousel"
        >
            {/* Ring layer */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    perspective: `${perspective}px`,
                    pointerEvents: "none",
                }}
            >
                {items.map((item, i) => (
                    <RingItem
                        key={i}
                        item={item}
                        index={i}
                        itemCount={items.length}
                        itemWidth={rawItemWidth}
                        itemHeight={itemHeight}
                        radius={radius}
                        ellipseHeight={ellipseHeight}
                        perspective={perspective}
                        rotation={rotation}
                        sideScale={sideScale}
                        frontScale={frontScale}
                        minOpacity={minOpacity}
                        sideBlur={sideBlur}
                        itemRadius={itemRadius}
                        visibleArc={visibleArc}
                        springTiltX={springTiltX}
                        springTiltY={springTiltY}
                        mouseTilt={mouseTilt}
                        tiltX={tiltX}
                        tiltY={tiltY}
                        tiltShift={tiltShift}
                        tiltShiftY={tiltShiftY}
                    />
                ))}
            </div>

            {/* Center preview */}
            {showCenterPreview && centerItem && (
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: previewWidth,
                        transform: "translate(-50%, -50%)",
                        zIndex: 5,
                    }}
                >
                    {titleBarContent && (
                        <div style={{ position: "relative", zIndex: 2 }}>
                            {titleBarContent}
                        </div>
                    )}
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: fadeDuration }}
                            style={{
                                width: "100%",
                                height: previewHeight,
                                overflow: "hidden",
                                borderRadius: showTitleBar
                                    ? `0 0 ${previewRadius} ${previewRadius}`
                                    : previewRadius,
                                boxShadow: previewShadow
                                    ? "0px 24px 60px rgba(0,0,0,0.24)"
                                    : "none",
                            }}
                        >
                            {centerItem.type === "video" && centerItem.video ? (
                                <video
                                    src={centerItem.video}
                                    poster={centerItem.poster}
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                <img
                                    src={centerItem.image || centerItem.poster}
                                    alt={centerItem.alt || centerItem.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    )
}
