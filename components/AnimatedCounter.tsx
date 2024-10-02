'use client'

import CountUp from "react-countup"

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div>
            <CountUp
                duration={2.75}
                decimals={2}
                end={amount}
                decimal="."
                prefix="₹"

            />
        </div>
    )
}

export default AnimatedCounter