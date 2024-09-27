import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Box, Card, CardContent, CardHeader, Container, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { promises as fs } from 'fs';
import Image from 'next/image';
import CategoryLayer from "../../components/CategoryLayer/CategoryLayer";
import JBox from "../../components/JBox/JBox";
import JLink from '../../components/JLink/JLink';
import GoBackButton from '../../components/GoBackButton/GoBackButton';


type Params = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Params) {
    return { title: `Work Experience in ${params.slug}` };
}

export default async function Page({ params }: Params) {
    const file = (await fs.readFile(process.cwd() + `/app/data/project/${params.slug}.json`, 'utf8'));
    const data = JSON.parse(file);

    return (
        <Stack direction={{ xs: "column", md: "row" }}>
            <Stack>
                <GoBackButton />
                <Container sx={{ flexGrow: 1, display: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        src={data.company.image.src}
                        alt={`${params.slug}-logo`}
                        width={data.company.image.width}
                        height={data.company.image.height}
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </Container>
            </Stack>
            <Box>
                <JBox needsDivider isSectionComponent>
                    <Typography variant="h4" sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                        {data.company.name}
                    </Typography>
                    <Typography variant="subtitle1" component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>
                        {`${data.role}`} • {`${data.timePeriod}`}
                    </Typography>
                    <Typography variant="subtitle1" component="span" textAlign="center" sx={{ display: { xs: 'block', md: 'none' } }}>
                        {`${data.role}`} • {`${data.timePeriod}`}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent={{ xs: "center", md: "flex-start" }}
                        alignItems="center"
                        spacing={2}
                        textAlign="center"
                    >
                        <Typography variant="subtitle2">
                            {
                                data.company.homePage.text
                                    ? (
                                        <JLink href={data.company.homePage.href} newTab>
                                            <Tooltip title={data.company.homePage.text} placement="right-end">
                                                <IconButton>
                                                    <HomeOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </JLink>
                                    ) : (
                                        <Tooltip title="No homepage provided" placement="right-end">
                                            <IconButton>
                                                <HomeOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )
                            }
                        </Typography>
                        <Typography variant="subtitle2">
                            {
                                data.referenceInfo
                                    ? (
                                        <JLink href={data.referenceInfo.href} newTab>
                                            <Tooltip title={data.referenceInfo.text} placement="right-end">
                                                <IconButton>
                                                    <ConnectWithoutContactOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </JLink>
                                    ) : (
                                        <Tooltip title="Reference no longer exists." placement="right-end">
                                            <IconButton>
                                                <ConnectWithoutContactOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )
                            }
                        </Typography>
                    </Stack>
                </JBox>
                <Container>
                    <Card sx={{ p: 1 }}>
                        <CardHeader
                            title={<Typography variant="h6">Technology Stack</Typography>}
                        />
                        <Divider />
                        <CardContent>
                            {
                                data.frontend && (
                                    <Typography variant="h6">
                                        FrontEnd: {' '}
                                        <CategoryLayer
                                            tightSpacing
                                            categories={data.frontend}
                                        />
                                    </Typography>
                                )
                            }
                            {
                                data.backend && (
                                    <Typography variant="h6">
                                        BackEnd: {' '}
                                        <CategoryLayer
                                            tightSpacing
                                            categories={data.backend}
                                        />
                                    </Typography>
                                )
                            }
                            {
                                data.database && (
                                    <Typography variant="h6">
                                        Database and related tools: {' '}
                                        <CategoryLayer
                                            tightSpacing
                                            categories={data.database}
                                        />
                                    </Typography>
                                )
                            }
                            {
                                data.cloud && (
                                    <Typography variant="h6">
                                        Cloud Infrastructure and CI/CD pipelines: {' '}
                                        <CategoryLayer
                                            tightSpacing
                                            categories={data.cloud}
                                        />
                                    </Typography>
                                )
                            }
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </Stack>
    )
}
