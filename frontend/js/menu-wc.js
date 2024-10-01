'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">financas-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AngularMaterialModule.html" data-type="entity-link" >AngularMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AplicativoModule.html" data-type="entity-link" >AplicativoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AplicativoModule-1d91019abf8624b4d7e2e6129353479cd46ae174edd49cdb4c216c35b9e3a36f9f24d583702f91c59bd96ae2cafafa5e5413faaacb7369c3b09be21aec8902a5"' : 'data-bs-target="#xs-components-links-module-AplicativoModule-1d91019abf8624b4d7e2e6129353479cd46ae174edd49cdb4c216c35b9e3a36f9f24d583702f91c59bd96ae2cafafa5e5413faaacb7369c3b09be21aec8902a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AplicativoModule-1d91019abf8624b4d7e2e6129353479cd46ae174edd49cdb4c216c35b9e3a36f9f24d583702f91c59bd96ae2cafafa5e5413faaacb7369c3b09be21aec8902a5"' :
                                            'id="xs-components-links-module-AplicativoModule-1d91019abf8624b4d7e2e6129353479cd46ae174edd49cdb4c216c35b9e3a36f9f24d583702f91c59bd96ae2cafafa5e5413faaacb7369c3b09be21aec8902a5"' }>
                                            <li class="link">
                                                <a href="components/ContaDetalheComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContaDetalheComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntrarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LancamentoDetalheComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LancamentoDetalheComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LancamentosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LancamentosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaldosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaldosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AplicativoRoutingModule.html" data-type="entity-link" >AplicativoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-a2187ba5b41b05c603b80219873dff1652c1ea8a85a69f93abd711c8622f9500d4baa49466840916c4b6e4dc5c9edee3e21d4122501ecaf57859c4de398154da"' : 'data-bs-target="#xs-components-links-module-CoreModule-a2187ba5b41b05c603b80219873dff1652c1ea8a85a69f93abd711c8622f9500d4baa49466840916c4b6e4dc5c9edee3e21d4122501ecaf57859c4de398154da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-a2187ba5b41b05c603b80219873dff1652c1ea8a85a69f93abd711c8622f9500d4baa49466840916c4b6e4dc5c9edee3e21d4122501ecaf57859c4de398154da"' :
                                            'id="xs-components-links-module-CoreModule-a2187ba5b41b05c603b80219873dff1652c1ea8a85a69f93abd711c8622f9500d4baa49466840916c4b6e4dc5c9edee3e21d4122501ecaf57859c4de398154da"' }>
                                            <li class="link">
                                                <a href="components/AutenticacaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutenticacaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreditosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecuperarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecuperarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SplashScreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashScreenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-a2187ba5b41b05c603b80219873dff1652c1ea8a85a69f93abd711c8622f9500d4baa49466840916c4b6e4dc5c9edee3e21d4122501ecaf57859c4de398154da"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-a2187ba5b41b05c603b80219873dff1652c1ea8a85a69f93abd711c8622f9500d4baa49466840916c4b6e4dc5c9edee3e21d4122501ecaf57859c4de398154da"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-a2187ba5b41b05c603b80219873dff1652c1ea8a85a69f93abd711c8622f9500d4baa49466840916c4b6e4dc5c9edee3e21d4122501ecaf57859c4de398154da"' :
                                        'id="xs-injectables-links-module-CoreModule-a2187ba5b41b05c603b80219873dff1652c1ea8a85a69f93abd711c8622f9500d4baa49466840916c4b6e4dc5c9edee3e21d4122501ecaf57859c4de398154da"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link" >MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MainModule-54a8f102a04274d7fa0ade176b5ef9d5795c141cddfbba890da0c5a96db97b6a259e632a457ce393fdf281cbb16a71393a028a6dfaf99b71d16ff02b8f2c6f4e"' : 'data-bs-target="#xs-components-links-module-MainModule-54a8f102a04274d7fa0ade176b5ef9d5795c141cddfbba890da0c5a96db97b6a259e632a457ce393fdf281cbb16a71393a028a6dfaf99b71d16ff02b8f2c6f4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-54a8f102a04274d7fa0ade176b5ef9d5795c141cddfbba890da0c5a96db97b6a259e632a457ce393fdf281cbb16a71393a028a6dfaf99b71d16ff02b8f2c6f4e"' :
                                            'id="xs-components-links-module-MainModule-54a8f102a04274d7fa0ade176b5ef9d5795c141cddfbba890da0c5a96db97b6a259e632a457ce393fdf281cbb16a71393a028a6dfaf99b71d16ff02b8f2c6f4e"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrimeNgModule.html" data-type="entity-link" >PrimeNgModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/CustomMaxDirective.html" data-type="entity-link" >CustomMaxDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/CustomMinDirective.html" data-type="entity-link" >CustomMinDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Conta.html" data-type="entity-link" >Conta</a>
                            </li>
                            <li class="link">
                                <a href="classes/Funcionalidade.html" data-type="entity-link" >Funcionalidade</a>
                            </li>
                            <li class="link">
                                <a href="classes/Lancamento.html" data-type="entity-link" >Lancamento</a>
                            </li>
                            <li class="link">
                                <a href="classes/Perfil.html" data-type="entity-link" >Perfil</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permissao.html" data-type="entity-link" >Permissao</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utilizador.html" data-type="entity-link" >Utilizador</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AplicativoService.html" data-type="entity-link" >AplicativoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsolidadoService.html" data-type="entity-link" >ConsolidadoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContaService.html" data-type="entity-link" >ContaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LancamentoService.html" data-type="entity-link" >LancamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScreenService.html" data-type="entity-link" >ScreenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionService.html" data-type="entity-link" >SessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SplashScreenService.html" data-type="entity-link" >SplashScreenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserContextService.html" data-type="entity-link" >UserContextService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilizadorService.html" data-type="entity-link" >UtilizadorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/NoopInterceptor.html" data-type="entity-link" >NoopInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IConta.html" data-type="entity-link" >IConta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExtrato.html" data-type="entity-link" >IExtrato</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFuncionalidade.html" data-type="entity-link" >IFuncionalidade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILancamento.html" data-type="entity-link" >ILancamento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPerfil.html" data-type="entity-link" >IPerfil</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPermissao.html" data-type="entity-link" >IPermissao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResponse.html" data-type="entity-link" >IResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUtilizador.html" data-type="entity-link" >IUtilizador</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});