import * as React from "react";
import * as ReactDOM from "react-dom";
import { v1 as uuid } from "uuid";
import invariant from "invariant";

import { OnInit, OnDestroy, OnChanges, AfterViewInit } from "@angular/core";

export abstract class BaseWrapperComponent
	implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	private _rootDomId: string | undefined;
	private _component: any;

	protected get isMounted(): boolean {
		return !!this._rootDomId;
	}

	set component(component: any) {
		this._component = component;
	}
	get component(): any {
		return this._component;
	}

	get rootDomId(): string {
		return this._rootDomId || "";
	}

	protected getRootDomNode() {
		const node = document.getElementById(this.rootDomId);
		invariant(node, `Node '${this._rootDomId} not found!`);
		return node;
	}

	protected getProps(): any {}

	protected render() {
		if (this.isMounted && this.component) {
			ReactDOM.render(
				React.createElement(this.component, this.getProps()),
				this.getRootDomNode()
			);
		}
	}

	ngOnInit() {
		this._rootDomId = uuid();
	}

	ngOnChanges() {
		this.render();
	}

	ngAfterViewInit() {
		this.render();
	}

	ngOnDestroy() {
		// Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
		// ReactDOM.unmountComponentAtNode(this.getRootDomNode())
	}
}
