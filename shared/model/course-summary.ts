export interface CourseSummary {
    readonly id: number,
    readonly url: string,
    readonly description: string,
    readonly iconUrl: string,
    readonly courseListIcon: string,
    seqNo: number
}

export function createCourseSummary({
    id,
    url,
    description,
    iconUrl,
    courseListIcon,
    seqNo }: any): CourseSummary {
    return {
        id, url, description, iconUrl, courseListIcon, seqNo
    };
}

export function createCourseSummaries(data: any[]): CourseSummary[] {
    return data.map(createCourseSummary)
}