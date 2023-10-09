export type ISteps = {
    title: string,
    content: React.ReactElement | React.ReactNode,
}

export type IStepsProps = {
    steps: ISteps[],
    submitHandler: (el: any) => void
    navigateLink?: string
}