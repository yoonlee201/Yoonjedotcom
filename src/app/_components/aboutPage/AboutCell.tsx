

const AboutCell = () => {
    const introduction = [
        { h3: 'Name',  p: 'Yoonje Lee'},
        { h3: 'Age',  p: '21'},
        { h3: 'College',  p: 'Virginia Tech'},
        { h3: 'Major',  p: 'BS in Computer Science'},
        { h3: 'Hometown',  p: 'Seoul Korea'},
    ]
    return (
        <>
            {introduction.map(({h3, p}, i) => (
                <div key={i} className="flex h-[4rem] items-center justify-start pl-[1.75rem] text-blue gap-2 border-b-md border-blue">
                    <h3 className="text-h3">{h3}:</h3>
                    <p className="text-p">{p}</p>
                </div>
            ))
            }
        </>
    )
}

export default AboutCell;