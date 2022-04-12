import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";
import slugify from "slugify";

function getCss() {
  return `
    * {
        margin: 0;
        padding: 0;
        border-box: box-sizing;
    }
    body {
        background: #15141b;
        height: 100vh;
        display: flex;
    }

    .heading {
        font-family: 'Source Sans Pro', sans-serif;
        color: #fff;
        font-size: 6vw;
        font-weight: 700;
        line-height: 1;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10rem 6rem;
    }

    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid #3d375e7f;
        margin-right: 50px;
    }

    .name {
        font-family: 'Open Sans', sans-serif;
        color: rgba(243,244,246);
        font-size: 1.8vw;
        font-weight: 600;
    }

    .link {
        font-family: 'Open Sans', sans-serif;
        color: #8464c6;
        font-size: 1.8vw;
        font-weight: 600;
        margin: 0.8rem 0;
    }

    .box-info {
        display: flex;
        align-items: center;
    }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
  const { text } = parsedReq;
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet">
    <style>
        ${getCss()}
    </style>
    <body>
        <div class="container">
            <h1 class="heading">${sanitizeHtml(text)}</h1>

            <div class="box-info">
                <img
                    src="https://pbs.twimg.com/profile_images/1319261726836166656/VHb9nKyv_400x400.jpg"
                    alt="Miguel Machado"
                    class="avatar"
                />
                <div class="info">
                    <p class="name">Miguel Machado</p>
                    <p class="link">miguelmachado.dev/${slugify(text, {
                      lower: true,
                    })}</p>
                </div>
            </div>
        </div>
    </body>
</html>`;
}
