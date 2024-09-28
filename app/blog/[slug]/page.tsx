import Box from '@mui/material/Box';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { promises as fs } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image, { ImageProps } from 'next/image';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type Params = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Params) {
    return { title: `Post: ${params.slug}` };
}

function CustomCode({ children }: any) {
    return (
        <code
            style={{
                padding: 4,
                backgroundColor: 'dimgrey',
                borderRadius: 6,
            }}
        >
            {children}
        </code>
    )
}

function CustomPre({ children }: any) {
    return (
        <pre
            style={{
                padding: 12,
                backgroundColor: 'dimgrey',
                borderRadius: 6,
                overflow: 'auto hidden',
            }}
        >
            {children}
        </pre>
    )
}

function CustomImage(props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
    return (
        <Image {...(props as ImageProps)} />
    )
}

const overrideComponents = {
    code: CustomCode,
    img: CustomImage,
    pre: CustomPre,
}

export default async function Page({ params }: Params) {
    const file = (await fs.readFile(process.cwd() + `/app/data/blog/${params.slug}.mdx`, 'utf8'));
    return (
        <>
            <Box>
                <GoBackButton />
            </Box>
            <MDXRemote source={file} components={overrideComponents} />
        </>

    )
}
