'use client';

const AboutCell = () => {
    const introduction = [
        { h3: 'Name', p: 'Yoonje Lee' },
        { h3: 'Age', p: '21' },
        { h3: 'College', p: 'Virginia Tech' },
        { h3: 'Major', p: 'BS in Computer Science' },
        { h3: 'Hometown', p: 'Seoul Korea' },
    ];
    return (
        <div className="max-w-[40rem] pt-4">
            {introduction.map(({ h3, p }, i) => (
                <div
                    key={i}
                    className="flex h-[4rem] w-[20rem] md:min-w-[25rem] items-center justify-start gap-2 border-b-md border-blue pl-[1.75rem] text-blue">
                    <h3 className="text-h3">{h3}:</h3>
                    <p className="text-p">{p}</p>
                </div>
            ))}
        </div>
    );
};

export default AboutCell;
