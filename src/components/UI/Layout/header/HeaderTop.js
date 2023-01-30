import { Link } from 'react-router-dom';
import AppContainer from '../../../UI/AppContainer';
import './HeaderTop.css';

const HeaderTop = () => {
    return(
        <>
            <div className="red-cta-section">
                <AppContainer>
                    <p><span>New Welcome Rewards™+ members get $15 in rewards!</span> Enroll for $29/yr</p>
                </AppContainer>
            </div>
            <div className="blu-cta-section">
                <AppContainer>
                    <div className="blu-cta-wrap">
                        <div className="left-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 39" ><g fill="currentColor" fillRule="evenodd"><path fillRule="nonzero" d="M123.303 23.864c.264 0 .727.05.727-.288 0-.218-.29-.258-.52-.258h-.566v.546h.36zm.995 1.276h-.359l-.636-.978h-.359v.978h-.298v-2.121h.926c.382 0 .756.105.756.561 0 .418-.294.573-.672.582l.642.978zm.727-1.048c0-.913-.763-1.639-1.653-1.639-.892 0-1.653.726-1.653 1.639 0 .914.761 1.639 1.653 1.639.89 0 1.653-.725 1.653-1.639zm-3.604 0a1.93 1.93 0 011.95-1.936 1.93 1.93 0 011.952 1.936 1.93 1.93 0 01-1.951 1.936 1.93 1.93 0 01-1.951-1.936zM104.35 34.115h.739c3.956 0 7-.81 7-2.718 0-2.045-2.653-2.912-7-2.912h-.74v5.63zM92.435 23.934h12.132c11.002 0 19.438 2.14 19.438 7.482 0 4.32-6.871 7.06-16.482 7.06H92.435V23.933zm-16.086.01H68.47v14.54h7.848v-7.397l6.95 7.397h7.85v-14.54h-7.85v7.536zm-24.47 7.376c0 1.658 1.625 2.795 3.951 2.795 2.327 0 3.95-1.137 3.95-2.795 0-1.543-1.511-2.835-3.95-2.835-2.437 0-3.951 1.292-3.951 2.835m15.638-.078c0 4.668-5.24 7.463-11.687 7.463-6.445 0-11.686-2.795-11.686-7.463 0-4.57 5.27-7.54 11.686-7.54 6.418 0 11.687 2.97 11.687 7.54"></path><path fillRule="nonzero" d="M34.793 23.934l2.192 3.798h.21c.207-.462.389-.925.65-1.369l1.41-2.43h8.036l-6.732 8.273v6.269h-6.992v-6.269l-6.862-8.272h8.088zm-20.024 0h11.76v3.973H21.17v1.388h4.894v3.78H21.17v1.427h5.543v3.973H14.769zm-9.33 11.07h.658c.957 0 2.34-.02 2.34-1.216 0-1.214-1.488-1.195-2.424-1.195h-.574v2.41zm.531-5.478c.852 0 1.808-.076 1.808-1.08 0-1.08-1.085-1.003-1.935-1.003H5.44v2.083h.53zM.039 23.934h6.783c3.103 0 6.27.674 6.27 4.03 0 1.273-.702 2.526-2.104 2.931v.117c1.744.558 2.85 1.715 2.85 3.45 0 2.99-3.062 4.013-5.87 4.013H.039V23.934zm113.52-16.865c.972-.766 2.304-1.558 2.304-2.962 0-1.354-.974-2.094-2.254-2.094-1.15 0-2.15.817-2.15 2.042 0 .971.59 1.687 1.154 2.401l.638.818.308-.205zm-1.05 3.371c-1.33.92-3.506 2.221-3.506 4.06 0 1.839 1.74 3.55 3.583 3.55 1.792 0 3.225-1.353 4.428-2.554l-4.274-5.21-.23.154zm5.938 6.741c-1.46 1.712-3.507 3.014-5.784 3.014-3.224 0-5.913-2.349-5.913-5.669 0-2.452 1.536-3.78 3.38-5.107l1.203-.868c-1.1-1.15-2.125-2.58-2.125-4.215 0-2.655 1.92-4.212 4.453-4.212 2.355 0 4.453 1.48 4.453 4.009 0 2.17-1.894 3.626-3.506 4.8l4.018 4.852 2.253-2.605 1.535 1.583-2.355 2.759 3.456 4.265h-2.968l-2.1-2.606zm-20.39-8.886V.532h2.407v19.255h-2.406v-9.245h-9.189v9.245h-2.405V.532h2.406v7.763zM80.584 19.787h-2.406V2.728h-4.582V.532h11.568v2.196h-4.58z"></path><path d="M62.691 14.96l-2.2 4.826h-2.587L67.12-.286l9.214 20.072h-2.585l-2.201-4.827H62.69zm4.428-9.984l-3.43 7.787h6.86l-3.43-7.787z"></path><path fillRule="nonzero" d="M49.23 17.641h1.844c2.227 0 4.554-.663 4.554-3.395 0-2.707-2.762-3.27-4.913-3.27H49.23v6.665zm0-8.58h.615c2.277 0 4.145-.46 4.145-3.218 0-2.707-1.842-3.165-4.095-3.165h-.665V9.06zM46.824.532h2.355c3.634 0 7.064.945 7.064 5.286 0 1.404-.768 3.038-2.073 3.652v.05c2.279.41 3.864 2.63 3.864 4.878 0 3.856-3.3 5.388-6.705 5.388h-4.505V.532zM27.639 17.591h.845c4.913 0 9.163-1.84 9.163-7.431 0-5.619-4.25-7.432-9.163-7.432h-.845V17.59zM25.233.533h3.993c5.912 0 10.827 3.115 10.827 9.524 0 6.563-4.812 9.73-10.904 9.73h-3.916V.532zm-12.617 0H22.98v2.195h-7.96v5.389h7.73v2.195h-7.73v7.279h7.96v2.196H12.615z"></path><path d="M0 .532h2.354c3.636 0 7.064.945 7.064 5.287 0 1.403-.768 3.037-2.072 3.65 2.278.46 3.864 2.682 3.864 4.929 0 3.856-3.302 5.388-6.706 5.388H0V.532zm2.406 17.11h1.842c2.227 0 4.557-.664 4.557-3.396 0-2.707-2.765-3.27-4.915-3.27H2.406v6.666zm0-8.58h.613c2.28 0 4.148-.46 4.148-3.22 0-2.705-1.844-3.164-4.095-3.164h-.666v6.384z"></path></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109 55" ><g fill="currentColor" fillRule="evenodd"><path d="M4.766 36.319c0-2.493-.236-3.107-.978-3.107-.625 0-1.17.269-1.756.269C.704 33.48 0 32.063 0 30.912 0 29.265.975 28 4.413 28c1.797 0 3.358.384 5.312.384 3.399 0 5.624-.384 7.731-.384 2.033 0 3.946.23 5.626 1.11 2.108 1.113 3.32 3.068 3.32 5.446 0 2.912-2.072 4.946-4.922 5.367V40c3.75.88 5.975 3.103 5.975 6.745 0 6.402-5.936 7.936-10.544 7.936-2.15 0-4.101-.385-7.263-.385-2.306 0-3.633.385-5.391.385C.975 54.68 0 53.415 0 51.767c0-1.15.704-2.57 2.032-2.57.586 0 1.13.27 1.756.27.742 0 .978-.768.978-3.106V36.32zm7.225.958c0 .92.273.92 1.873.92 3.281 0 5.118-.844 5.118-2.8 0-2.03-2.578-2.529-4.22-2.529-2.577 0-2.771.5-2.771 2.337v2.072zm0 10.082c0 1.608.819 2.223 3.905 2.223 1.952 0 4.062-.96 4.062-3.068 0-2.567-2.93-3.526-5.977-3.526-1.913 0-1.99.04-1.99 1.647v2.724z"></path><path d="M39.793 46.36c-1.737-.04-1.98.152-2.222.458-.243.347-.566 1.612-.566 2.034 0 .5.283.728.808.728.322 0 .485.038.686.038.849 0 1.981.574 1.981 2.607 0 1.419-1.132 2.492-2.707 2.492-1.74 0-2.993-.384-4.81-.384-1.78 0-3.516.384-5.255.384-1.576 0-2.708-1.15-2.708-2.684 0-1.955 1.011-2.797 1.981-2.797.443 0 .889.076 1.373.076 1.254 0 1.7-1.839 2.022-2.72l5.536-14.415C37.408 28.305 37.853 28 42.258 28c1.9 0 3.516 0 4.364.419 1.053.539 1.215.998 1.74 2.762l4.93 15.679c.525 1.607.768 2.452 1.578 2.452.444 0 .848-.076 1.212-.076.97 0 1.978.726 1.978 2.797 0 1.534-1.13 2.684-2.746 2.684-1.74 0-2.991-.384-4.81-.384-1.778 0-3.518.384-5.254.384-1.576 0-2.71-1.073-2.71-2.492 0-1.65.85-2.607 1.982-2.607.202 0 .445.04.768.04.564 0 .93-.27.93-.806 0-.27-.082-.46-.122-.69-.081-.384-.244-1.112-.445-1.42-.242-.383-.646-.383-1.252-.383h-4.608zm0-5.903c-.04.152-.121.268-.121.421 0 .308.485.498 1.536.498h1.09c1.457 0 1.779-.152 1.779-.535 0-.269-.12-.768-.202-1.037l-1.657-7.09h-.081l-2.344 7.743z"></path><path d="M57.712 36.319c0-2.493-.232-3.107-.965-3.107-.618 0-1.157.269-1.737.269-1.315 0-2.01-1.418-2.01-2.569 0-1.647.967-2.912 4.365-2.912 1.778 0 3.323.384 5.254.384 3.361 0 5.56-.384 7.647-.384 2.01 0 3.9.23 5.562 1.11 2.085 1.113 3.284 3.068 3.284 5.446 0 2.912-2.048 4.946-4.868 5.367V40c3.708.88 5.91 3.103 5.91 6.745 0 6.402-5.87 7.936-10.428 7.936-2.125 0-4.056-.385-7.185-.385-2.28 0-3.591.385-5.33.385-3.244 0-4.211-1.265-4.211-2.913 0-1.15.695-2.57 2.01-2.57.58 0 1.119.27 1.737.27.733 0 .965-.768.965-3.106V36.32zm7.148.958c0 .92.27.92 1.853.92 3.245 0 5.06-.844 5.06-2.8 0-2.03-2.55-2.529-4.172-2.529-2.549 0-2.741.5-2.741 2.337v2.072zm0 10.082c0 1.608.81 2.223 3.862 2.223 1.93 0 4.016-.96 4.016-3.068 0-2.567-2.896-3.526-5.91-3.526-1.892 0-1.968.04-1.968 1.647v2.724z"></path><path d="M92.295 39.383l2.25-3.832c.53-.881.941-1.458.941-1.992 0-1.112-1.8-.424-1.8-2.724 0-1.726 1.062-2.835 2.333-2.835 1.637 0 3.313.383 4.994.383 1.677 0 2.864-.383 4.501-.383 1.844 0 2.866 1.263 2.866 2.911 0 1.151-.738 2.569-2.128 2.569-.573 0-1.105-.192-1.679-.192-.45 0-.777.079-1.104.424-.452.497-.942 1.263-1.352 1.839l-5.034 7.512c-1.022 1.534-1.31 2.109-1.31 2.76v2.264c0 .842.532 1.377 1.391 1.377.82 0 1.596-.266 2.374-.266 1.392 0 2.13 1.417 2.13 2.568 0 1.647-1.023 2.913-2.866 2.913-2.046 0-3.439-.385-5.688-.385-2.089 0-4.137.385-6.184.385-3.07 0-4.092-1.266-4.092-2.913 0-1.151.735-2.568 2.13-2.568.818 0 1.595.266 2.412.266.696 0 1.145-.382 1.145-1.416v-1.495c-.038-1.304-.324-1.687-1.35-3.26L82.43 35.97c-.328-.498-1.025-1.646-1.477-2.107-.326-.345-.694-.497-1.185-.497-.571 0-1.063.113-1.638.113-1.392 0-2.13-1.418-2.13-2.569 0-1.647 1.025-2.91 3.072-2.91 1.637 0 3.316.383 4.992.383 1.517 0 2.866-.383 4.503-.383 1.883 0 2.703 1.379 2.703 3.027 0 2.069-1.924 1.494-1.924 2.532 0 .42.287.956.86 1.992l2.089 3.832zM3.103 6.103c0-1.478-.06-2.1-.553-2.1-.306 0-.612.208-1.012.208C.526 4.211.19 3.413.19 2.525c0-1.153.52-2.07 1.808-2.07.798 0 1.627.297 2.455.297.921 0 1.81-.296 2.7-.296.735 0 1.012.444 1.012 1.596v5.085h.062c.95-1.3 2.454-1.98 4.233-1.98 4.416 0 5.982 4.316 5.982 7.924 0 4.05-1.962 8.336-6.749 8.336-2.025 0-3.866-.71-4.94-2.72l-.06.06.092.738c0 .947-.829 1.39-1.718 1.39-1.627 0-1.964-.74-1.964-2.159V6.103zm10.277 7.243c0-1.005-.091-2.1-.613-2.956-.4-.651-1.074-1.242-1.872-1.242-1.165 0-2.73 1.094-2.73 4.258 0 2.837 1.165 4.02 2.7 4.02 1.472 0 2.515-1.272 2.515-4.08z"></path><path d="M24.99 15.444c0 .621 0 1.656.367 2.246a2.094 2.094 0 001.717.918c.89 0 1.719-.445 2.21-1.182.643-.946.706-1.952.706-3.047V12.34c0-1.596-.123-2.07-.552-2.07-.153 0-.307.06-.46.089-.185.06-.339.119-.553.119-1.012 0-1.35-.798-1.35-1.685 0-1.124.521-2.042 1.87-2.042 1.012 0 1.688.297 2.7.297.83 0 1.413-.297 2.179-.297.798 0 .982.327.982.977v8.868c0 1.775.215 2.071.553 2.071.305 0 .612-.207 1.012-.207 1.012 0 1.349.798 1.349 1.684 0 1.124-.52 2.04-1.809 2.04-.768 0-1.473-.295-2.178-.295-.675 0-1.35.295-1.935.295-.764 0-1.102-.502-1.102-.975v-1.182h-.063c-1.135 1.626-3.342 2.543-5.398 2.543-3.16 0-5.062-1.775-5.062-4.76v-5.47c0-1.803-.216-2.07-.553-2.07-.152 0-.306.06-.46.089-.185.06-.338.119-.551.119-1.013 0-1.35-.798-1.35-1.685 0-1.124.52-2.042 1.963-2.042.982 0 1.778.297 2.79.297.952 0 1.412-.297 2.179-.297.8 0 .8.563.8 1.331v7.362z"></path><path d="M49.304 18.814c-1.596 4.227-4.144 9.608-9.603 9.608-2.363 0-5.185-1.093-5.185-3.724 0-1.45 1.197-2.542 2.7-2.542 1.165 0 2.118.915 2.118 2.039 0 .206-.062.414-.094.621.246.147.43.235.736.235 1.074 0 2.455-1.625 2.455-2.6 0-.71-.859-2.72-1.197-3.46l-3.097-7.066c-.521-1.242-.675-1.507-1.105-1.507-.245 0-.46.059-.707.059-1.012 0-1.348-.798-1.348-1.686 0-1.123.52-2.04 1.81-2.04.92 0 1.963.297 3.005.297 1.106 0 2.178-.297 3.344-.297 1.197 0 1.78.682 1.78 1.775 0 .974-.491 1.183-.981 1.33-.492.117-1.013.117-1.013.65 0 .296.244.917.308 1.154l1.994 5.971h.06l1.994-5.706c.153-.384.399-1.063.399-1.448 0-.326-.428-.384-.858-.591-.43-.177-.89-.503-.89-1.39 0-.916.614-1.745 1.595-1.745.86 0 1.809.297 2.76.297 1.044 0 2.055-.297 3.13-.297 1.287 0 1.809.917 1.809 2.04 0 .888-.336 1.686-1.348 1.686-.277 0-.553-.118-.829-.118-.337 0-.614.207-1.074 1.419l-2.668 7.036z"></path><path d="M54.857 6.103c0-1.478-.06-2.1-.554-2.1-.307 0-.612.208-1.013.208-1.01 0-1.347-.798-1.347-1.686 0-1.153.52-2.07 1.808-2.07.8 0 1.628.297 2.453.297.923 0 1.813-.296 2.702-.296.735 0 1.013.444 1.013 1.596v5.085h.062c.949-1.3 2.452-1.98 4.233-1.98 4.416 0 5.98 4.316 5.98 7.924 0 4.05-1.962 8.336-6.748 8.336-2.024 0-3.864-.71-4.939-2.72l-.06.06.091.738c0 .947-.828 1.39-1.717 1.39-1.628 0-1.964-.74-1.964-2.159V6.103zm10.275 7.243c0-1.005-.09-2.1-.61-2.956-.401-.651-1.076-1.242-1.875-1.242-1.164 0-2.728 1.094-2.728 4.258 0 2.837 1.165 4.02 2.7 4.02 1.47 0 2.513-1.272 2.513-4.08z"></path><path d="M76.763 15.444c0 .621 0 1.656.37 2.246a2.089 2.089 0 001.715.918c.891 0 1.719-.445 2.21-1.182.644-.946.706-1.952.706-3.047V12.34c0-1.596-.124-2.07-.553-2.07-.153 0-.306.06-.459.089-.185.06-.34.119-.553.119-1.01 0-1.351-.798-1.351-1.685 0-1.124.522-2.042 1.874-2.042 1.011 0 1.686.297 2.697.297.83 0 1.414-.297 2.18-.297.796 0 .98.327.98.977v8.868c0 1.775.216 2.071.553 2.071.307 0 .613-.207 1.013-.207 1.014 0 1.348.798 1.348 1.684 0 1.124-.52 2.04-1.808 2.04-.768 0-1.473-.295-2.177-.295-.675 0-1.353.295-1.936.295-.764 0-1.102-.502-1.102-.975v-1.182h-.062c-1.135 1.626-3.343 2.543-5.399 2.543-3.16 0-5.063-1.775-5.063-4.76v-5.47c0-1.803-.214-2.07-.553-2.07-.15 0-.305.06-.458.089-.185.06-.338.119-.553.119-1.013 0-1.35-.798-1.35-1.685 0-1.124.52-2.042 1.964-2.042.981 0 1.778.297 2.792.297.95 0 1.41-.297 2.177-.297.798 0 .798.563.798 1.331v7.362z"></path><path d="M101.075 18.814c-1.593 4.227-4.141 9.608-9.603 9.608-2.36 0-5.182-1.093-5.182-3.724 0-1.45 1.197-2.542 2.7-2.542 1.164 0 2.117.915 2.117 2.039 0 .206-.062.414-.093.621.246.147.43.235.735.235 1.076 0 2.454-1.625 2.454-2.6 0-.71-.859-2.72-1.195-3.46l-3.098-7.066c-.52-1.242-.675-1.507-1.104-1.507-.246 0-.46.059-.708.059-1.012 0-1.348-.798-1.348-1.686 0-1.123.521-2.04 1.81-2.04.921 0 1.963.297 3.005.297 1.107 0 2.18-.297 3.344-.297 1.197 0 1.78.682 1.78 1.775 0 .974-.49 1.183-.982 1.33-.49.117-1.011.117-1.011.65 0 .296.246.917.307 1.154l1.994 5.971h.06l1.994-5.706c.152-.384.4-1.063.4-1.448 0-.326-.43-.384-.859-.591-.429-.177-.89-.503-.89-1.39 0-.916.614-1.745 1.596-1.745.86 0 1.808.297 2.762.297 1.04 0 2.053-.297 3.128-.297 1.288 0 1.808.917 1.808 2.04 0 .888-.336 1.686-1.348 1.686-.276 0-.553-.118-.829-.118-.337 0-.613.207-1.073 1.419l-2.67 7.036z"></path></g></svg>
                            <svg viewBox="0 0 100 21" xmlns="http://www.w3.org/2000/svg" ><path d="M11.916 9.125c.473.937.71 2.036.71 3.298v8.282H9.933v-8.282c0-.729-.145-1.365-.435-1.908a3.042 3.042 0 00-1.187-1.243c-.502-.286-1.082-.429-1.737-.429-.735 0-1.395.173-1.984.518a3.654 3.654 0 00-1.39 1.464c-.337.631-.507 1.351-.507 2.16v7.72H0V0h2.693v8.607h.029c.366-.61.945-1.163 1.738-1.656a4.888 4.888 0 012.635-.74c1.08 0 2.036.25 2.867.754.83.503 1.481 1.223 1.954 2.16zm17.218 9.242c.213 0 .416-.048.609-.147v2.455c-.097.079-.265.152-.507.222a2.591 2.591 0 01-.71.103c-.676 0-1.236-.143-1.68-.429-.444-.286-.778-.626-.998-1.02-.202-.358-.31-.683-.33-.976h-.06c-.213.395-.542.774-.986 1.139-.444.365-.994.67-1.65.917a6.05 6.05 0 01-2.143.369c-.888 0-1.684-.188-2.388-.562a4.21 4.21 0 01-1.65-1.523 3.844 3.844 0 01-.595-2.056c0-1.163.377-2.134 1.13-2.913.753-.779 1.814-1.287 3.186-1.523l4.864-.84v-.106c0-.513-.13-.98-.391-1.405a2.805 2.805 0 00-1.071-1.006c-.454-.246-.97-.37-1.55-.37-.791 0-1.496.193-2.114.577a6.937 6.937 0 00-1.592 1.345L16.77 8.904c.366-.454.81-.882 1.332-1.288A7.02 7.02 0 0119.94 6.61a6.382 6.382 0 012.273-.4c1.12 0 2.11.238 2.968.71a5.134 5.134 0 012.012 1.968c.482.838.725 1.77.725 2.795v5.442c0 .395.105.7.318.917.213.217.512.325.897.325zm-3.909-4.582l-4.199.767c-.734.138-1.299.39-1.694.754-.395.366-.593.795-.593 1.287 0 .375.096.716.29 1.02.192.307.482.558.869.754.385.198.82.297 1.303.297.734 0 1.41-.187 2.027-.563a4.037 4.037 0 001.462-1.538c.358-.65.536-1.38.536-2.188v-.59zm15.06-4.779c.191.03.365.064.52.103V6.211h-.723c-.637 0-1.241.114-1.81.34a4.836 4.836 0 00-1.463.888 5.582 5.582 0 00-.955 1.08h-.058V6.506h-2.693v14.197h2.693v-7.305c0-.848.174-1.613.52-2.293.349-.68.821-1.207 1.42-1.582a3.642 3.642 0 011.97-.562 3.9 3.9 0 01.578.044zm22.288-2.041a4.573 4.573 0 00-2.548-.754c-.81 0-1.54.129-2.186.384-.647.257-1.187.573-1.622.947-.434.375-.748.76-.94 1.154h-.058c-.194-.394-.497-.779-.913-1.154a5.52 5.52 0 00-1.505-.947 4.783 4.783 0 00-1.926-.384c-.966 0-1.815.246-2.548.74-.734.492-1.245 1.045-1.534 1.656h-.029V6.508h-2.693v14.197h2.693v-7.868c0-.808.15-1.512.45-2.114.298-.601.709-1.065 1.23-1.39a3.267 3.267 0 011.766-.488c.56 0 1.067.134 1.52.4.455.266.816.66 1.087 1.183.27.522.405 1.138.405 1.848v8.43h2.722v-7.898c0-.788.144-1.483.434-2.085.29-.601.695-1.065 1.216-1.39a3.267 3.267 0 011.767-.488c.56 0 1.071.134 1.534.4.463.266.83.66 1.1 1.183.27.522.405 1.138.405 1.848v8.43h2.693v-8.43c0-1.202-.227-2.263-.68-3.18-.455-.917-1.068-1.628-1.84-2.131zm6.216 10.382c-.628-1.133-.94-2.381-.94-3.742 0-1.36.313-2.607.94-3.742a6.942 6.942 0 012.606-2.676 7.059 7.059 0 013.634-.976c1.312 0 2.524.325 3.634.976a6.935 6.935 0 012.606 2.676c.626 1.134.94 2.382.94 3.742 0 1.36-.314 2.609-.94 3.742a6.948 6.948 0 01-2.606 2.677 7.059 7.059 0 01-3.634.976 7.054 7.054 0 01-3.634-.976 6.935 6.935 0 01-2.606-2.677zm1.752-3.742c0 .908.193 1.727.579 2.455a4.19 4.19 0 001.621 1.701 4.468 4.468 0 002.289.606 4.47 4.47 0 002.287-.606 4.196 4.196 0 001.622-1.7c.386-.73.579-1.548.579-2.456 0-.906-.193-1.725-.58-2.454a4.196 4.196 0 00-1.621-1.701 4.47 4.47 0 00-2.287-.607 4.48 4.48 0 00-2.289.607 4.196 4.196 0 00-1.621 1.7c-.386.73-.58 1.55-.58 2.455zm24.176-6.64c-.83-.503-1.785-.754-2.866-.754a4.88 4.88 0 00-2.635.74c-.792.492-1.37 1.045-1.738 1.656h-.029V6.508h-2.693v14.197h2.693v-7.72c0-.809.169-1.528.508-2.16.337-.63.8-1.119 1.39-1.464a3.85 3.85 0 011.983-.518c.656 0 1.235.143 1.738.43.502.285.897.7 1.187 1.242.29.543.435 1.178.435 1.908v8.282h2.693v-8.282c0-1.262-.236-2.361-.71-3.298-.475-.937-1.125-1.657-1.956-2.16zm4.542 12.213c.413 0 .741.344.741.766a.75.75 0 01-.741.764.749.749 0 01-.74-.764c0-.421.327-.766.74-.766zm0 1.395c.34 0 .61-.281.61-.63a.619.619 0 00-.61-.632.62.62 0 00-.61.632c0 .349.269.63.61.63zm.114-.519c.114-.03.163-.134.163-.238 0-.125-.078-.25-.241-.25h-.29v.763h.146v-.264h.05l.186.264h.178l-.192-.275zm-.078-.342c.062 0 .097.05.097.103a.098.098 0 01-.1.102h-.14v-.206h.143z" fill="#fff"></path></svg>
                        </div>
                    </div>
                </AppContainer>
            </div>
            <section className="headertop-section">
                <AppContainer>
                    <div className="headertop-wrapper">
                        <div className="left-box">
                            <div className="stiky-menu-wrap">
                                <button className="menu-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" height="21px" width="21px"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h20M1 8h20M1 15h20"></path></svg>
                                </button>
                            </div>
                            <div className="logo-wrap">
                                <Link to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 39"><g fill="currentColor" fillRule="evenodd"><path fillRule="nonzero" d="M123.303 23.864c.264 0 .727.05.727-.288 0-.218-.29-.258-.52-.258h-.566v.546h.36zm.995 1.276h-.359l-.636-.978h-.359v.978h-.298v-2.121h.926c.382 0 .756.105.756.561 0 .418-.294.573-.672.582l.642.978zm.727-1.048c0-.913-.763-1.639-1.653-1.639-.892 0-1.653.726-1.653 1.639 0 .914.761 1.639 1.653 1.639.89 0 1.653-.725 1.653-1.639zm-3.604 0a1.93 1.93 0 011.95-1.936 1.93 1.93 0 011.952 1.936 1.93 1.93 0 01-1.951 1.936 1.93 1.93 0 01-1.951-1.936zM104.35 34.115h.739c3.956 0 7-.81 7-2.718 0-2.045-2.653-2.912-7-2.912h-.74v5.63zM92.435 23.934h12.132c11.002 0 19.438 2.14 19.438 7.482 0 4.32-6.871 7.06-16.482 7.06H92.435V23.933zm-16.086.01H68.47v14.54h7.848v-7.397l6.95 7.397h7.85v-14.54h-7.85v7.536zm-24.47 7.376c0 1.658 1.625 2.795 3.951 2.795 2.327 0 3.95-1.137 3.95-2.795 0-1.543-1.511-2.835-3.95-2.835-2.437 0-3.951 1.292-3.951 2.835m15.638-.078c0 4.668-5.24 7.463-11.687 7.463-6.445 0-11.686-2.795-11.686-7.463 0-4.57 5.27-7.54 11.686-7.54 6.418 0 11.687 2.97 11.687 7.54"></path><path fillRule="nonzero" d="M34.793 23.934l2.192 3.798h.21c.207-.462.389-.925.65-1.369l1.41-2.43h8.036l-6.732 8.273v6.269h-6.992v-6.269l-6.862-8.272h8.088zm-20.024 0h11.76v3.973H21.17v1.388h4.894v3.78H21.17v1.427h5.543v3.973H14.769zm-9.33 11.07h.658c.957 0 2.34-.02 2.34-1.216 0-1.214-1.488-1.195-2.424-1.195h-.574v2.41zm.531-5.478c.852 0 1.808-.076 1.808-1.08 0-1.08-1.085-1.003-1.935-1.003H5.44v2.083h.53zM.039 23.934h6.783c3.103 0 6.27.674 6.27 4.03 0 1.273-.702 2.526-2.104 2.931v.117c1.744.558 2.85 1.715 2.85 3.45 0 2.99-3.062 4.013-5.87 4.013H.039V23.934zm113.52-16.865c.972-.766 2.304-1.558 2.304-2.962 0-1.354-.974-2.094-2.254-2.094-1.15 0-2.15.817-2.15 2.042 0 .971.59 1.687 1.154 2.401l.638.818.308-.205zm-1.05 3.371c-1.33.92-3.506 2.221-3.506 4.06 0 1.839 1.74 3.55 3.583 3.55 1.792 0 3.225-1.353 4.428-2.554l-4.274-5.21-.23.154zm5.938 6.741c-1.46 1.712-3.507 3.014-5.784 3.014-3.224 0-5.913-2.349-5.913-5.669 0-2.452 1.536-3.78 3.38-5.107l1.203-.868c-1.1-1.15-2.125-2.58-2.125-4.215 0-2.655 1.92-4.212 4.453-4.212 2.355 0 4.453 1.48 4.453 4.009 0 2.17-1.894 3.626-3.506 4.8l4.018 4.852 2.253-2.605 1.535 1.583-2.355 2.759 3.456 4.265h-2.968l-2.1-2.606zm-20.39-8.886V.532h2.407v19.255h-2.406v-9.245h-9.189v9.245h-2.405V.532h2.406v7.763zM80.584 19.787h-2.406V2.728h-4.582V.532h11.568v2.196h-4.58z"></path><path d="M62.691 14.96l-2.2 4.826h-2.587L67.12-.286l9.214 20.072h-2.585l-2.201-4.827H62.69zm4.428-9.984l-3.43 7.787h6.86l-3.43-7.787z"></path><path fillRule="nonzero" d="M49.23 17.641h1.844c2.227 0 4.554-.663 4.554-3.395 0-2.707-2.762-3.27-4.913-3.27H49.23v6.665zm0-8.58h.615c2.277 0 4.145-.46 4.145-3.218 0-2.707-1.842-3.165-4.095-3.165h-.665V9.06zM46.824.532h2.355c3.634 0 7.064.945 7.064 5.286 0 1.404-.768 3.038-2.073 3.652v.05c2.279.41 3.864 2.63 3.864 4.878 0 3.856-3.3 5.388-6.705 5.388h-4.505V.532zM27.639 17.591h.845c4.913 0 9.163-1.84 9.163-7.431 0-5.619-4.25-7.432-9.163-7.432h-.845V17.59zM25.233.533h3.993c5.912 0 10.827 3.115 10.827 9.524 0 6.563-4.812 9.73-10.904 9.73h-3.916V.532zm-12.617 0H22.98v2.195h-7.96v5.389h7.73v2.195h-7.73v7.279h7.96v2.196H12.615z"></path><path d="M0 .532h2.354c3.636 0 7.064.945 7.064 5.287 0 1.403-.768 3.037-2.072 3.65 2.278.46 3.864 2.682 3.864 4.929 0 3.856-3.302 5.388-6.706 5.388H0V.532zm2.406 17.11h1.842c2.227 0 4.557-.664 4.557-3.396 0-2.707-2.765-3.27-4.915-3.27H2.406v6.666zm0-8.58h.613c2.28 0 4.148-.46 4.148-3.22 0-2.705-1.844-3.164-4.095-3.164h-.666v6.384z"></path></g></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="mid-box">
                            <div className="search-box">
                                <svg xmlns="http://www.w3.org/2000/svg" height="21" width="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <p>What product can we help you find?</p>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="user-box">
                                <h3>sign in</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="26px" width="21px"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5"><path d="M10.785 5.158a4.158 4.158 0 01-4.158 4.158 4.158 4.158 0 110-8.316c2.297 0 4.16 1.86 4.16 4.158z"></path><path strokeLinecap="round" d="M1 16.41c0-3.69 2.52-6.68 5.627-6.68s5.627 2.99 5.627 6.68"></path></g></svg>
                            </div>
                            <div className="cart-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" width="26"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path strokeWidth="1.5" d="M1 1l2.785.287 2.485 9.021h9.148l1.704-6.152H4.918"></path><path strokeWidth="1.75" d="M9.337 14.527a1.747 1.747 0 11-3.493 0 1.747 1.747 0 013.493 0z"></path><path strokeWidth="1.5" d="M15.912 14.527a1.747 1.747 0 11-3.494 0 1.747 1.747 0 013.494 0z"></path></g></svg>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </AppContainer>
            </section>
        </>
    );
};

export default HeaderTop;