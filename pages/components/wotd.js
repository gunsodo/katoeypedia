import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

export default function WOTD() {
    const dictionary = require('../../public/dictionary.json');
    const words = dictionary.words;
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    const wotd = words[(Math.floor(today.getTime() / 86400000) * 97) % words.length];
    const url = 'https://katoeypedia.vercel.app'
    const text = '[Katoeypedia] Word of the Day' + '\n' + wotd.word + ' แปลว่าอะไร'

    return (
        <div className="text-center rounded-md w-full border-2 border-black p-6 divide-y-2 divide-black space-y-4">
            <p className="font-display text-xl font-bold">ศัพท์กะเทยประจำวันนี้</p>
            <div id='content' className="font-body pt-4 space-y-2">
                <p className="font-bold text-2xl">{wotd.word}</p>
                <p className="text-lg">({dictionary.pos_th[wotd.pos]}) {wotd.meaning}</p>

                <div id="share" className='pt-4'>
                    <p className="pb-2 text-sm">Share</p>
                    <div className='space-x-1'>
                        <FacebookShareButton
                            url={url}
                            quote={text}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={url} 
                            title={text}>
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                    </div>

                </div>
            </div>
        </div>
    )
}