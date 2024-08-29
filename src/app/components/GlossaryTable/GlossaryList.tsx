import GlossaryRow from "./GlossaryRow";

interface Data {
    title: string;
    description: string;
    example: string;
    output: string;
}

interface GlossaryListProps {
    questions: Data[];
}

const GlossaryList = ({ questions }: GlossaryListProps) => {
    console.log("Questions:", questions);

    const validQuestions = questions.filter(
        (item) => item.title && item.description,
    );

    return validQuestions.length > 0 ? (
        <div className="overflow-y-auto h-3/5 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-amber-400 scrollbar-track-transparent">
            <table className="md:border-separate md:border-spacing-x-4 w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">Title</th>
                        <th className="px-4 py-2 text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {validQuestions.map((item) => (
                        <GlossaryRow key={item.title} question={item} />
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <h1 className="text-center">None Found</h1>
    );
};

export default GlossaryList;