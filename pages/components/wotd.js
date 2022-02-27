export default function WOTD() {
    const dictionary = require('../../public/dictionary.json');
    const words = dictionary.words;
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    const wotd = words[today.getTime() * 97 % words.length];

    return (
        <div className="text-center rounded-md w-full border-2 border-black p-6 divide-y-2 divide-black space-y-4">
            <p className="font-display text-xl font-bold">ศัพท์กะเทยประจำวันนี้</p>
            <div id='content' className="font-body pt-4 space-y-2">
                <p className="font-bold text-2xl">{wotd.word}</p>
                <p className="text-lg">({dictionary.pos_th[wotd.pos]}) {wotd.meaning}</p>
            </div>
        </div>
    )
}