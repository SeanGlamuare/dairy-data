import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<DefaultSeo
				title="Dairy Data"
				description="Dairy Data is a milk recording company"
				openGraph={{
					type: "website",
					locale: "en_IE",
					url: "https://www.dairydata.ie/",
					siteName: "DairyData",
					images: [
						{
							url: "https://res.cloudinary.com/dqdktlbxw/image/upload/v1673587541/DairyData/front_wafm0h.png",
							width: 850,
							height: 650,
							alt: "Dairy Data",
							type: "image/png",
						},
					],
				}}
				twitter={{
					handle: "@dairydata",
					site: "@dairydata",
					cardType: "summary_large_image",
				}}
			/>
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

export default MyApp;
