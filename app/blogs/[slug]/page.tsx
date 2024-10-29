import { promises as fs } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image, { ImageProps } from 'next/image';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import Box from '@mui/material/Box';

type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(props: Params) {
    const params = await props.params;
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

export default async function Page(props: Params) {
    const params = await props.params;
    const file = (await fs.readFile(process.cwd() + `/app/data/blog/${params.slug}.mdx`, 'utf8'));
    return (
        <>
            <GoBackButton />
            <Box p={1}>
                <MDXRemote source={file} components={overrideComponents} />
            </Box>
        </>
    )
}
