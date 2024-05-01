import { titleFont } from '@/config/fonts';
import React, { FC } from 'react'

interface Props {
    title: string;
    subTitle?: string;
    className?: string;
}

export const Title: FC<Props> = ({ title, subTitle, className = "" }) => {
  return (
    <div className={`${ className } mt-3`}>
        <h1 className={`${ titleFont.className } antialiased text-3xl font-semibold my-10`}>
            {
                title
            }
        </h1>

        {
            subTitle && (
                <h3 className="text-xl mb-5">
                    { subTitle }
                </h3>
            )
        }
    </div>
  )
}
