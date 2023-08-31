import * as React from "react";
import "./home.scss";
import Divider from "../../components/Divider/divider";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="banner img"></div>
        <div className="content">
          <div className="content_left">
            <h1 className="title">February is Pet Dental Health Month</h1>
            <p className="content_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              blandit convallis ipsum id lobortis. Nam dolor neque, semper
              mollis vehicula at, congue vel ex. Ut aliquet, justo ut vulputate
              congue, libero eros tincidunt elit, quis pellentesque justo nibh
              eget massa. Ut eleifend, leo eget euismod luctus, augue odio
              auctor ante, at ullamcorper leo nunc vel ligula. Suspendisse
              hendrerit tellus sed lectus eleifend blandit. Phasellus laoreet,
              nisl pellentesque eleifend lobortis, leo ipsum lobortis urna,
              malesuada lacinia velit orci quis leo. Morbi consectetur
              pellentesque neque in tincidunt. Donec fringilla nibh ex, ut
              feugiat eros faucibus vel. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Morbi placerat elit
              sit amet sapien pharetra ultricies. Curabitur et metus tempus
              magna faucibus posuere. Integer ornare gravida lacus, et tristique
              felis fermentum non. Morbi at nunc sit amet nunc fermentum
              placerat sit amet nec tortor. <br />
              <br />
              Nunc eget mattis ipsum. Duis a quam fringilla, iaculis nisi sit
              amet, blandit ex. Maecenas congue blandit est ut lacinia. Nulla ut
              turpis ex. Ut at erat sit amet velit cursus finibus vitae in
              tellus. Pellentesque molestie felis nec diam sodales, id auctor
              justo aliquet.
            </p>
            <Divider></Divider>
            <br />
            Vivamus sollicitudin massa vel sapien sodales, eget pharetra felis
            efficitur. Praesent posuere feugiat cursus. Nulla nec sem velit.
            Integer ligula dui, porttitor id elit ac, ultrices congue arcu.
            Nullam vel eros faucibus, scelerisque tellus eget, dictum elit. Duis
            eu purus ullamcorper, commodo libero in, laoreet velit. Phasellus
            posuere aliquam magna, ac venenatis odio consequat et. Nunc iaculis
            mauris et eros finibus suscipit. Sed finibus mattis mattis. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Ut vitae libero vitae risus gravida gravida. Nulla lectus
            leo, egestas ultrices turpis ut, semper dignissim sapien. Proin nibh
            tortor, lobortis a turpis at, dictum cursus orci. Donec ultrices
            tempor quam vel elementum. Proin eget tortor in neque vulputate
            tincidunt in sit amet neque. Morbi vitae fermentum purus, in sodales
            lorem. Curabitur at ultrices tortor. Donec dignissim mauris id neque
            bibendum auctor. <br />
            <br />
            Duis efficitur, sem vitae ultricies rhoncus, justo magna convallis
            ex, ac vehicula augue mauris ac nibh. Aliquam in posuere enim. Nam
            eget lectus sed ligula mattis tempor. Maecenas vel fermentum eros,
            ut finibus mauris. Curabitur consectetur magna non massa pharetra
            viverra.
          </div>

          <div className="content_right">
            <div className="gatsby2 img"></div>
            <h1 className="title">Meet Gatsby</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              blandit convallis ipsum id lobortis. Nam dolor neque, semper
              mollis vehicula at, congue vel ex. Ut aliquet, justo ut vulputate
              congue, libero eros tincidunt elit, quis pellentesque justo nibh
              eget massa. Ut eleifend, leo eget euismod luctus, augue odio
              auctor ante, at ullamcorper leo nunc vel ligula. Suspendisse
              hendrerit tellus sed lectus eleifend blandit. Phasellus laoreet,
              nisl pellentesque eleifend lobortis, leo ipsum lobortis urna,
              malesuada lacinia velit orci quis leo. Morbi consectetur
              pellentesque neque in tincidunt. Donec fringilla nibh ex, ut
              feugiat eros faucibus vel. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Morbi placerat elit
              sit amet sapien pharetra ultricies. Curabitur et metus tempus
              magna faucibus posuere. Integer ornare gravida lacus, et tristique
              felis fermentum non. Morbi at nunc sit amet nunc fermentum
              placerat sit amet nec tortor.
            </p>
            <div className="gatsby1 img"></div>
            <p>
              Duis efficitur, sem vitae ultricies rhoncus, justo magna convallis
              ex, ac vehicula augue mauris ac nibh. Aliquam in posuere enim. Nam
              eget lectus sed ligula mattis tempor. Maecenas vel fermentum eros,
              ut finibus mauris. Curabitur consectetur magna non massa pharetra
              viverra.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
