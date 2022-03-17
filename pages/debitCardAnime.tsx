import { NextPage } from "next";
import Image from "next/image";

const DebitCardAnime: NextPage = () => {
  return (
    <div style={{ display: "flex", height:"100%", backgroundColor: "#efefef", paddingRight:10, paddingLeft:10,overflowY:"scroll" }}>
      
      <div style={{flex:0.5,  marginLeft: "-12%", position:"relative",marginRight:10 }}>
        <Image src="/anastasia.png" alt="anastasia idolmaster" layout="fill" objectFit="fill"/>
      </div>
      <div style={{ flex: 1}}>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          kredi kartı bilgilerini <br /> g-görmeme izin v-verir misin?
        </p>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginLeft: -10, marginBottom: 2 }}>kredi kartındaki numarayı yazar mısın :3</label>
          <input style={{ width: 300 }} placeholder="____·____·____·____"  />
          <label style={{ marginBottom: 5 }}>Süresi ne zaman bitiyor owo</label>
          <div style={{ display: "inline-block" }}>
            <input style={{ width: 100 }} />
            <p>MM/YY</p>
          </div>
          <label style={{ marginBottom: 40, marginTop: 30 }}>
            arkadaki numaralar... ne <br /> yazıyo ? okuyamıyorum :(
          </label>
          <input style={{ marginBottom: 40, width: 100 }} />
          <button style={{ fontSize: 30, width: 300}}>
          arigatou senpai!
          </button>
        </form>
      </div>
    </div>
  );
};
export default DebitCardAnime;
