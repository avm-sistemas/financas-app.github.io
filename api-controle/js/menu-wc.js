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
                    <a href="index.html" data-type="index-link">api-controle documentation</a>
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
                                <a href="modules/AplicativoModule.html" data-type="entity-link" >AplicativoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AplicativoModule-ed45a4efe2d6bfd38f727277312a5f3f90e53b61cd3b8fa0a97e5d16fcdc9bb4335e50a8d4845088d7b11eae5c338580b74e3d806f424a1ab62c81111ec6284c"' : 'data-bs-target="#xs-controllers-links-module-AplicativoModule-ed45a4efe2d6bfd38f727277312a5f3f90e53b61cd3b8fa0a97e5d16fcdc9bb4335e50a8d4845088d7b11eae5c338580b74e3d806f424a1ab62c81111ec6284c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AplicativoModule-ed45a4efe2d6bfd38f727277312a5f3f90e53b61cd3b8fa0a97e5d16fcdc9bb4335e50a8d4845088d7b11eae5c338580b74e3d806f424a1ab62c81111ec6284c"' :
                                            'id="xs-controllers-links-module-AplicativoModule-ed45a4efe2d6bfd38f727277312a5f3f90e53b61cd3b8fa0a97e5d16fcdc9bb4335e50a8d4845088d7b11eae5c338580b74e3d806f424a1ab62c81111ec6284c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ContaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContaController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/LancamentoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LancamentoController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/NotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AplicativoModule-ed45a4efe2d6bfd38f727277312a5f3f90e53b61cd3b8fa0a97e5d16fcdc9bb4335e50a8d4845088d7b11eae5c338580b74e3d806f424a1ab62c81111ec6284c"' : 'data-bs-target="#xs-injectables-links-module-AplicativoModule-ed45a4efe2d6bfd38f727277312a5f3f90e53b61cd3b8fa0a97e5d16fcdc9bb4335e50a8d4845088d7b11eae5c338580b74e3d806f424a1ab62c81111ec6284c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AplicativoModule-ed45a4efe2d6bfd38f727277312a5f3f90e53b61cd3b8fa0a97e5d16fcdc9bb4335e50a8d4845088d7b11eae5c338580b74e3d806f424a1ab62c81111ec6284c"' :
                                        'id="xs-injectables-links-module-AplicativoModule-ed45a4efe2d6bfd38f727277312a5f3f90e53b61cd3b8fa0a97e5d16fcdc9bb4335e50a8d4845088d7b11eae5c338580b74e3d806f424a1ab62c81111ec6284c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LancamentoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LancamentoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-6aeda5725b52e092bc0aa19d49c78cec6733f17b661cef0b1cdf56fac47660741c7e2238c3431be0f00df0ebcd80d364cee21246ca6c241ec7060951d1ed0e41"' : 'data-bs-target="#xs-controllers-links-module-AppModule-6aeda5725b52e092bc0aa19d49c78cec6733f17b661cef0b1cdf56fac47660741c7e2238c3431be0f00df0ebcd80d364cee21246ca6c241ec7060951d1ed0e41"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-6aeda5725b52e092bc0aa19d49c78cec6733f17b661cef0b1cdf56fac47660741c7e2238c3431be0f00df0ebcd80d364cee21246ca6c241ec7060951d1ed0e41"' :
                                            'id="xs-controllers-links-module-AppModule-6aeda5725b52e092bc0aa19d49c78cec6733f17b661cef0b1cdf56fac47660741c7e2238c3431be0f00df0ebcd80d364cee21246ca6c241ec7060951d1ed0e41"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-6aeda5725b52e092bc0aa19d49c78cec6733f17b661cef0b1cdf56fac47660741c7e2238c3431be0f00df0ebcd80d364cee21246ca6c241ec7060951d1ed0e41"' : 'data-bs-target="#xs-injectables-links-module-AppModule-6aeda5725b52e092bc0aa19d49c78cec6733f17b661cef0b1cdf56fac47660741c7e2238c3431be0f00df0ebcd80d364cee21246ca6c241ec7060951d1ed0e41"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6aeda5725b52e092bc0aa19d49c78cec6733f17b661cef0b1cdf56fac47660741c7e2238c3431be0f00df0ebcd80d364cee21246ca6c241ec7060951d1ed0e41"' :
                                        'id="xs-injectables-links-module-AppModule-6aeda5725b52e092bc0aa19d49c78cec6733f17b661cef0b1cdf56fac47660741c7e2238c3431be0f00df0ebcd80d364cee21246ca6c241ec7060951d1ed0e41"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthenticationController.html" data-type="entity-link" >AuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContaController.html" data-type="entity-link" >ContaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LancamentoController.html" data-type="entity-link" >LancamentoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NotificationController.html" data-type="entity-link" >NotificationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Authentication.html" data-type="entity-link" >Authentication</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Conta.html" data-type="entity-link" >Conta</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Lancamento.html" data-type="entity-link" >Lancamento</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Notification.html" data-type="entity-link" >Notification</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
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
                                <a href="classes/CreateAuthenticationDto.html" data-type="entity-link" >CreateAuthenticationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateContaDto.html" data-type="entity-link" >CreateContaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLancamentoDto.html" data-type="entity-link" >CreateLancamentoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNotificationDto.html" data-type="entity-link" >CreateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseDto.html" data-type="entity-link" >ResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthenticationDto.html" data-type="entity-link" >UpdateAuthenticationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateContaDto.html" data-type="entity-link" >UpdateContaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLancamentoDto.html" data-type="entity-link" >UpdateLancamentoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNotificationDto.html" data-type="entity-link" >UpdateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserPhotoDto.html" data-type="entity-link" >UpdateUserPhotoDto</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContaService.html" data-type="entity-link" >ContaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LancamentoService.html" data-type="entity-link" >LancamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
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
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
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
                                <a href="interfaces/IResponse.html" data-type="entity-link" >IResponse</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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